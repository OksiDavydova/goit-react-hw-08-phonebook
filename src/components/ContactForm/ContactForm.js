import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addNewContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();

  render() {
    const { name, number } = this.state;
    const { inputNameId, inputNumberId } = this;
    return (
      <div className={s.form_overlay}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label htmlFor={inputNameId} className={s.label}>
            Name:
            <input
              type="text"
              className={s.input}
              onChange={this.handleChange}
              value={name}
              name="name"
              id={inputNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={inputNumberId} className={s.label}>
            Number:
            <input
              type="tel"
              className={s.input}
              onChange={this.handleChange}
              value={number}
              name="number"
              id={inputNumberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <br />
          <button type="submit" className={s.btn_submit}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
