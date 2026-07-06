import { useState } from "react";
import { Button } from "../Button";
import {
  ContainerLinks,
  FormSection,
  InfoContactSection,
  ContactSection,
} from "./styles";
import emailjs from "@emailjs/browser";

export function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject,
    };

    emailjs
      .send(
        "service_j8imqxo",
        "template_c92h1va",
        templateParams,
        "DI9jsKOf2BAfvmtJf",
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        },
        (err) => {
          console.log("Erro: ", err);
        },
      );
  }
  return (
    <ContactSection
      id="contact"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
    >
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
        <form onSubmit={sendEmail}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label>Assunto</label>
          <input
            type="text"
            name="assunto"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />

          <label>Mensagem:</label>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />

          <Button type="submit" className="ButtonForm">
            Enviar
          </Button>
        </form>
      </FormSection>
    </ContactSection>
  );
}
