import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main, Section } from './styles';

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <Main maxWidth={false}>
        <Section>
          <Header />
          <Outlet />
        </Section>
        <Footer />
      </Main>
    </>
  );
}
