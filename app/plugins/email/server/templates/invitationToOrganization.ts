export const TemplateInvitationToOrganization = `
<Card.Header>
  <h2>Bienvenue chez QuickFlow</h2>
  <hr />
</Card.Header>

<Card.Body>
  <p>Vous avez été invité à rejoindre {{ organization_name }}.</p>
  <p>
    <a href="{{ url_invitation }}" target="_blank">Acceptez l'invitation</a>
  </p>
</Card.Body>

<Card.Footer>
  <p>Envoyé par QuickFlow</p>
</Card.Footer>
  `.trim()
