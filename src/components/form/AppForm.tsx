import styled from 'styled-components/macro';
import { Formik } from 'formik';
import { ComponentPropsWithoutRef } from 'react';

export const AppForm = styled(Formik).attrs<ComponentPropsWithoutRef<'form'>>(
  props => ({
    className: ['form', props.className].join(' '),
  }),
)``;
