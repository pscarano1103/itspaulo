import { Button } from "../Button";
import {
  ContainerLinks,
  FormSection,
  InfoContactSection,
  ContactSection,
} from "./styles";

export function Contato() {
  return (
    <ContactSection id="contact">
      <InfoContactSection>
        <h2 className="title-section">Entre em contato</h2>

        <p>Envie sua proposta e vamos agendar uma call para conversarmos!</p>

        <ContainerLinks>
          <a href="https://www.linkedin.com/in/opauloscarano/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/pscarano1103" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/opauloscarano/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </ContainerLinks>
      </InfoContactSection>

      <FormSection>
        <form>
          <label>Nome</label>
          <input type="text" name="name" required />

          <label>E-mail</label>
          <input type="email" name="email" required />

          <label>Assunto</label>
          <input type="text" name="assunto" required />

          <label>Mensagem:</label>
          <textarea name="message" required />

          <Button type="submit" className="ButtonForm">
            Enviar
          </Button>
        </form>
      </FormSection>
    </ContactSection>
  );
}
