import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBR);

export default function DatePicker({ name, date }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (date) {
      setSelected(parseISO(date));
    }
  }, [date]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        placeholderText="Data do Meetup"
        selected={selected}
        showTimeSelect
        locale="pt-BR"
        dateFormat="Pp"
        timeFormat="p"
        onChange={date => setSelected(date)}
        ref={ref}
        className="datePicker"
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
