export const TemplateResetPassword = `
<Card.Header>
  <h2>Réinitialisation du mot de passe</h2>
  <hr />
</Card.Header>

<Card.Body>
  <p>Nous avons reçu une demande de réinitialisation de votre mot de passe.</p>
  <p>Cliquez sur le bouton ci-dessous pour le réinitialiser</p>
  <p>
    <a href="{{ url_password_reset }}" target="_blank">Réinitialiser le mot de passe</a>
  </p>
  <p>Si vous n'avez pas demandé la réinitialisation du mot de passe, ignorez cet e-mail.</p>
</Card.Body>

<Card.Footer>
  <p>Envoyé par QuickFlow</p>
</Card.Footer>
  `.trim()