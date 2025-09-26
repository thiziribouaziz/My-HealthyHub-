// src/pages/Contact.jsx
import React, {
  useState
} from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });
  const [loading, setLoading] = useState(false);

  // anti-spam honeypot (champ caché)
  const [bot] = useState('');

  const onChange = (e) => (
    setForm({
      ...form,
      [e.target.name]: e.target.value
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      type: '',
      msg: ''
    });

    // Retour implicite (undefined) cohérent -> pas de valeur renvoyée
    if (bot) {
      return;
    }

    // Validation simple — on ne "return" pas de valeur : on stoppe seulement le flux
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: 'error',
        msg: 'Merci de remplir tous les champs obligatoires.'
      });
      return;
    }

    try {
      setLoading(true);
      // 👉 si tu as un backend, crée une route POST /api/contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error('Erreur serveur');
      }

      setStatus({
        type: 'success',
        msg: 'Message envoyé ! Nous revenons vers vous rapidement.'
      });
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus({
        type: 'error',
        msg: 'Impossible d’envoyer votre message. Réessayez plus tard.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page page--narrow">
      <h1>Contact</h1>
      <p>
        Une question, un dysfonctionnement à signaler, ou une amélioration à proposer ?
        Écrivez-nous via ce formulaire.
      </p>

      <form className="form" onSubmit={onSubmit} noValidate>
        {/* Honeypot caché */}

        <div className="grid">
          <label className="field">
            <span>Nom *</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Votre nom"
            />
          </label>

          <label className="field">
            <span>Email *</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="vous@exemple.com"
            />
          </label>
        </div>

        <label className="field">
          <span>Objet</span>
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={onChange}
            placeholder="Sujet de votre message"
          />
        </label>

        <label className="field">
          <span>Message *</span>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            required
            placeholder="Décrivez votre demande…"
          />
        </label>

        {status.msg && (
          <div className={`alert ${status.type === 'success' ? 'alert--ok' : 'alert--err'}`}>
            {status.msg}
          </div>
        )}

        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
