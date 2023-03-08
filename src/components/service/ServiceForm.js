import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "../form/SubmitButton";

function ServiceForm({ handleSubmit, textBtn, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    /*spread operator -> 
    ...service -> pega o objeto atual / 
    [e.target.name] -> nome do input que vai ser a chave da propriedade do objeto / 
    e.target.value -> pega o valor do input retornado no evento handleChange */
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Serviço:"
        name="name"
        placeholder="Digite o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do Serviço:"
        name="cost"
        placeholder="Digite o valor total do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço:"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={textBtn} />
    </form>
  );
}

export default ServiceForm;
