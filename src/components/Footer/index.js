import React from 'react';
import {
  SectionFooter,
  FooterContent,
  FooterContentText,
  FooterContentTextImg,
  FooterCompany,
  FooterCompanyTitle,
  FooterLanguage,
} from './style';
import FooterLink from './FooterLink/index';
import FooterMidia from './FooterMidia/index';

const Footer = () => (
  <>
    <SectionFooter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <FooterContent>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Nubank</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Sobre nós"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Carreiras"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Perguntas frequentes"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Contato"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Imprensa"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Produtos</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Conta digital"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Cartão de crédito"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Rewards"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Empréstimo"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Conta PJ"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Explore</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="Comunidade"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="Blog"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="Newsletter"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="México"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="Argentina"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--rotate"
                          url="http://localhost:3000/#"
                          text="Colombia"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Veja Também</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link"
                          url="http://localhost:3000/#"
                          text="Auxílio Emergencial e FGTS"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link"
                          url="http://localhost:3000/#"
                          text="Tudo sobre o Pix"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Transparência</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Política de Privacidade"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Política de Compliance"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Contratos"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Política de Segurança"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Relatórios Financeiros"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Ética &#38; Compliance"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Dados Abertos"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="SCR"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Ouvidoria</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="0800 887 0463"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="ouvidoria@nubank.com.br"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Atendimento das 9h às 18h (dias úteis)"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Fale com a gente</p>
                    <ul>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="0800 608 6236"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="meajuda@nubank.com.br"
                        />
                      </li>
                      <li>
                        <FooterLink
                          modifier="footer_link--without"
                          url="http://localhost:3000/#"
                          text="Atendimento 24h"
                        />
                      </li>
                    </ul>
                  </FooterContentText>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <FooterContentText>
                    <p>Baixe o App</p>
                    <FooterContentTextImg>
                      <a href="#">
                        <svg
                          width="151"
                          height="56"
                          fill="none"
                          viewBox="0 0 151 56"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Apple Store Icon</title>
                          <path fill="#000" d="M0 0h151v56H0z" />
                          <path
                            d="M50.68 14.95V22h2.37c2.1 0 3.33-1.3 3.33-3.53 0-2.21-1.24-3.52-3.33-3.52h-2.37zm.88.8H53c1.6 0 2.49.97 2.49 2.73 0 1.75-.89 2.73-2.49 2.73h-1.43v-5.46zM57.88 22h.85v-5.08h-.85V22zm.43-5.98c.3 0 .53-.24.53-.53a.53.53 0 10-1.06 0c0 .29.23.53.53.53zm1.98 2.3c0 .74.47 1.18 1.42 1.41l.8.2c.59.14.79.35.79.71 0 .46-.42.75-1.11.75-.7 0-1.08-.27-1.19-.85h-.84c.1.95.84 1.55 2.03 1.55 1.13 0 1.96-.63 1.96-1.51 0-.73-.37-1.13-1.4-1.38l-.8-.2c-.56-.13-.82-.37-.82-.72 0-.45.4-.75 1.03-.75.62 0 1.01.32 1.08.86h.8c-.03-.9-.77-1.56-1.88-1.56-1.1 0-1.87.62-1.87 1.5zM68 16.83c-.73 0-1.32.38-1.64.95h-.02v-.86h-.8v6.77h.85v-2.52h.02c.3.56.89.92 1.61.92 1.28 0 2.16-1.04 2.16-2.63 0-1.6-.88-2.63-2.18-2.63zm-.16 4.51c-.87 0-1.46-.75-1.46-1.88s.59-1.88 1.46-1.88c.9 0 1.47.73 1.47 1.88s-.57 1.88-1.47 1.88zm5.8.75c1.4 0 2.35-1.01 2.35-2.63 0-1.62-.95-2.63-2.35-2.63-1.4 0-2.35 1.01-2.35 2.63 0 1.62.94 2.63 2.35 2.63zm0-.75c-.9 0-1.49-.68-1.49-1.88 0-1.2.6-1.88 1.5-1.88.89 0 1.47.68 1.47 1.88 0 1.2-.58 1.88-1.48 1.88zm3.7.66h.86v-2.99c0-.86.52-1.42 1.32-1.42.78 0 1.17.45 1.17 1.27V22h.85v-3.3c0-1.15-.65-1.87-1.76-1.87-.79 0-1.33.36-1.61.9h-.02v-.8h-.8V22zm5.83 0h.85v-5.08h-.85V22zm.76-5.81l1.14-1.47h-.93l-.87 1.47h.66zm5.9.73h-.89l-1.4 4.18h-.02l-1.4-4.18h-.9L87.1 22h.87l1.87-5.08zm3.06.65c.8 0 1.33.6 1.35 1.46h-2.76c.05-.85.61-1.46 1.4-1.46zm1.33 2.97c-.14.48-.62.81-1.26.81-.91 0-1.48-.64-1.48-1.61v-.05h3.64v-.32c0-1.54-.85-2.54-2.22-2.54-1.4 0-2.3 1.07-2.3 2.65 0 1.6.89 2.6 2.34 2.6 1.1 0 1.97-.65 2.11-1.54h-.83zm2.3 1.46h.85v-7.05h-.85V22zm5.05 0h.85v-2.99c0-.86.52-1.42 1.32-1.42.78 0 1.17.45 1.17 1.27V22h.85v-3.3c0-1.15-.65-1.87-1.76-1.87-.78 0-1.33.36-1.61.9h-.02v-.8h-.8V22zm7.45-.63c-.61 0-1.02-.32-1.02-.8 0-.48.4-.79 1.08-.83l1.35-.08v.41c0 .73-.61 1.3-1.41 1.3zm-.2.72c.7 0 1.34-.38 1.64-.96h.02V22h.8v-3.51c0-1.01-.75-1.66-1.94-1.66-1.2 0-1.95.68-2.01 1.56h.82c.1-.5.52-.8 1.17-.8.7 0 1.11.36 1.11.98V19l-1.45.08c-1.17.07-1.84.62-1.84 1.48 0 .92.68 1.53 1.69 1.53z"
                            fill="#F5F5F5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M35.62 14.22a5.48 5.48 0 01-1.32 4 4.92 4.92 0 01-3.83 1.76 5.22 5.22 0 011.35-3.86 5.95 5.95 0 013.8-1.9zm4.71 8.53c-.16.09-2.82 1.63-2.79 4.76A5.52 5.52 0 0041 32.56c-.02.1-.53 1.8-1.8 3.55-1.06 1.54-2.17 3.04-3.94 3.07-.83.02-1.4-.22-2-.46a5.37 5.37 0 00-4.63.02c-.56.22-1.1.45-1.86.48-1.68.06-2.97-1.64-4.07-3.17-2.2-3.1-3.9-8.75-1.61-12.6a6.33 6.33 0 015.3-3.13 7.1 7.1 0 012.67.65c.61.24 1.16.45 1.6.45.4 0 .93-.2 1.55-.44.98-.38 2.17-.84 3.4-.71.83.02 3.2.32 4.72 2.48zM94.59 38.24c.79-.7 1.18-1.6 1.18-2.7 0-.9-.27-1.65-.8-2.25a6.6 6.6 0 00-2.54-1.58 6.99 6.99 0 01-1.94-1c-.41-.34-.62-.76-.62-1.28 0-.46.18-.85.54-1.17.42-.36 1-.54 1.76-.54.95 0 1.8.2 2.56.6l.53-1.7a6.63 6.63 0 00-3.03-.62c-1.36 0-2.45.34-3.27 1.02a3.26 3.26 0 00-1.23 2.63c0 1.63 1.17 2.88 3.5 3.72.87.31 1.48.65 1.85 1 .37.37.55.81.55 1.34 0 .6-.22 1.07-.67 1.42-.45.35-1.07.53-1.88.53a5.98 5.98 0 01-3.1-.83l-.49 1.74c.87.54 2.03.8 3.46.8 1.56 0 2.77-.37 3.64-1.13zm-35.6.94h2.28L56.95 26.2H54.3l-4.3 13h2.22l1.19-3.82h4.33L59 39.18zm-2.75-8.8l1.13 3.39h-3.59l1.11-3.4c.3-1.08.5-1.9.64-2.44h.04c.33 1.28.55 2.1.67 2.44zM71 38.15a5.24 5.24 0 001.32-3.78c0-1.42-.38-2.57-1.14-3.45a3.61 3.61 0 00-2.84-1.3c-1.45 0-2.53.55-3.25 1.67h-.04l-.12-1.49h-1.88c.05 1.06.08 2.09.08 3.09V43h2.14v-4.94h.04c.56.9 1.47 1.33 2.73 1.33 1.18 0 2.16-.4 2.96-1.23zM69.5 32.2c.42.6.63 1.35.63 2.26a3.9 3.9 0 01-.67 2.39c-.45.6-1.08.9-1.88.9-.69 0-1.24-.23-1.67-.7a2.46 2.46 0 01-.65-1.72v-1.57c0-.16.03-.37.1-.63a2.36 2.36 0 012.28-1.85c.78 0 1.4.3 1.86.92zm13.88 2.18c0 1.6-.44 2.86-1.32 3.78a3.93 3.93 0 01-2.95 1.23c-1.27 0-2.18-.44-2.74-1.33h-.04V43H74.2V32.9c0-1-.02-2.03-.07-3.09H76l.12 1.49h.04a3.59 3.59 0 013.24-1.68c1.14 0 2.09.44 2.85 1.31a5.09 5.09 0 011.13 3.45zm-2.17.08c0-.91-.22-1.66-.64-2.26a2.2 2.2 0 00-1.86-.92 2.36 2.36 0 00-2.28 1.85c-.06.26-.1.47-.1.63v1.57c0 .68.22 1.25.65 1.72.42.47.98.7 1.67.7.8 0 1.43-.3 1.88-.9.45-.6.68-1.4.68-2.39zm21.63-3.08h-2.36v4.55c0 1.15.41 1.73 1.25 1.73.38 0 .7-.03.95-.1l.06 1.58c-.43.16-.98.23-1.67.23a2.6 2.6 0 01-1.98-.75c-.47-.5-.71-1.34-.71-2.52v-4.73h-1.4v-1.56h1.4V28.1l2.1-.62v2.33h2.36v1.57zm9.37 6.59a5.06 5.06 0 001.26-3.55c0-1.4-.4-2.54-1.23-3.43-.86-.91-2-1.37-3.4-1.37-1.47 0-2.64.47-3.5 1.4a5 5 0 00-1.3 3.56 4.9 4.9 0 001.26 3.45 4.36 4.36 0 003.38 1.36c1.46 0 2.64-.47 3.53-1.42zm-1.53-5.7c.38.61.57 1.35.57 2.22 0 .86-.2 1.61-.59 2.24a2.15 2.15 0 01-1.92 1.14c-.83 0-1.48-.37-1.94-1.12a4.12 4.12 0 01-.58-2.22c0-.9.2-1.65.58-2.26a2.16 2.16 0 011.96-1.12c.83 0 1.47.37 1.92 1.12zm9.75-.63a3.82 3.82 0 00-.68-.05c-.75 0-1.33.27-1.74.83-.36.49-.54 1.1-.54 1.85v4.91h-2.14l.02-6.42c0-1.07-.02-2.06-.08-2.94h1.87l.08 1.79h.05c.23-.62.59-1.11 1.07-1.49.48-.33 1-.5 1.55-.5.2 0 .38.02.53.04v1.98zm9.48 3.36c.06-.26.08-.57.08-.94 0-1.17-.28-2.16-.85-2.95-.71-1-1.76-1.5-3.15-1.5-1.41 0-2.53.5-3.36 1.5a5.27 5.27 0 00-1.2 3.52c0 1.44.43 2.59 1.28 3.44a4.75 4.75 0 003.52 1.29c1.24 0 2.32-.2 3.23-.58l-.34-1.45c-.78.3-1.64.45-2.6.45-.85 0-1.55-.22-2.1-.66-.59-.49-.9-1.2-.93-2.12h6.42zm-2.37-3.08c.28.45.42.98.41 1.6h-4.45c.06-.63.27-1.17.63-1.62.43-.57 1-.85 1.7-.85.77 0 1.33.29 1.7.87z"
                            fill="#F5F5F5"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width="151"
                          height="56"
                          fill="none"
                          viewBox="0 0 151 56"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Google Play Icon</title>
                          <path fill="#000" d="M0 0h151v56H0z" />
                          <path
                            d="M75.65 29.38c-2.39 0-4.34 1.81-4.34 4.3a4.26 4.26 0 004.34 4.28c2.4 0 4.35-1.82 4.35-4.29a4.25 4.25 0 00-4.35-4.29zm0 6.9c-1.31 0-2.44-1.07-2.44-2.6 0-1.55 1.13-2.61 2.44-2.61s2.44 1.06 2.44 2.6-1.14 2.6-2.44 2.6zm-9.48-6.9c-2.4 0-4.35 1.81-4.35 4.3a4.26 4.26 0 004.35 4.28c2.39 0 4.34-1.82 4.34-4.29a4.25 4.25 0 00-4.34-4.29zm0 6.9c-1.32 0-2.45-1.07-2.45-2.6 0-1.55 1.13-2.61 2.45-2.61 1.3 0 2.44 1.06 2.44 2.6s-1.13 2.6-2.44 2.6zM54.89 30.7v1.81h4.4a3.82 3.82 0 01-1 2.3 4.5 4.5 0 01-3.4 1.32 4.8 4.8 0 01-4.82-4.84 4.8 4.8 0 014.83-4.84c1.45 0 2.52.56 3.3 1.3l1.3-1.28a6.44 6.44 0 00-4.61-1.84 6.79 6.79 0 00-6.82 6.67 6.8 6.8 0 006.82 6.67c2 0 3.5-.64 4.69-1.87a6 6 0 001.59-4.25c0-.43-.03-.82-.1-1.14h-6.18v-.01zM101 32.1c-.36-.95-1.46-2.73-3.7-2.73s-4.09 1.74-4.09 4.3c0 2.4 1.83 4.28 4.3 4.28a4.3 4.3 0 003.6-1.9l-1.48-.97a2.47 2.47 0 01-2.12 1.19 2.2 2.2 0 01-2.1-1.3l5.79-2.38-.2-.48zm-5.9 1.44a2.36 2.36 0 012.25-2.5c.76 0 1.4.37 1.61.9l-3.87 1.6zm-4.71 4.16h1.9V25.09h-1.9v12.62zm-3.11-7.37h-.08a3 3 0 00-2.28-.96 4.29 4.29 0 00-4.15 4.31c0 2.4 1.99 4.28 4.15 4.28 1.03 0 1.86-.45 2.28-.98h.07v.62c0 1.64-.89 2.52-2.31 2.52a2.4 2.4 0 01-2.18-1.52l-1.66.68a4.12 4.12 0 003.84 2.54c2.22 0 4.1-1.3 4.1-4.47v-7.71h-1.8v.7h.02zm-2.2 5.94c-1.3 0-2.4-1.1-2.4-2.59 0-1.51 1.1-2.61 2.4-2.61 1.3 0 2.32 1.1 2.32 2.61 0 1.5-1.01 2.59-2.31 2.59zm24.83-11.19h-4.55v12.62h1.9v-4.78h2.66c2.11 0 4.18-1.52 4.18-3.92s-2.09-3.92-4.19-3.92zm.04 6.08h-2.7v-4.33h2.7A2.2 2.2 0 01112.2 29c0 .99-.8 2.17-2.23 2.17zm11.75-1.8c-1.37 0-2.8.6-3.39 1.92l1.69.7c.36-.7 1.03-.93 1.73-.93.98 0 1.98.58 2 1.62v.13a4.28 4.28 0 00-1.99-.48c-1.82 0-3.66.99-3.66 2.84 0 1.68 1.48 2.77 3.15 2.77 1.27 0 1.99-.56 2.42-1.23h.06v.98h1.84v-4.84c0-2.24-1.68-3.49-3.85-3.49zm-.23 6.9c-.63 0-1.49-.3-1.49-1.06 0-.97 1.08-1.35 2.02-1.35.83 0 1.23.19 1.72.43a2.29 2.29 0 01-2.25 1.99zm10.77-6.63l-2.18 5.47H130l-2.26-5.47h-2.05l3.39 7.64-1.93 4.25h1.98l5.22-11.9h-2.12zm-17.1 8.07h1.9V25.09h-1.9v12.62z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M16.92 15.04c-.3.32-.47.8-.47 1.42v22.32c0 .62.18 1.1.47 1.41l.07.07 12.61-12.5V27.48L17 14.97l-.08.07z"
                            fill="url(#paint0_linear)"
                          />
                          <path
                            d="M33.8 31.94l-4.2-4.17v-.3l4.2-4.17.1.05 4.98 2.8c1.42.8 1.42 2.11 0 2.92l-4.98 2.8-.1.07z"
                            fill="url(#paint1_linear)"
                          />
                          <path
                            d="M33.9 31.88l-4.3-4.26-12.68 12.57c.47.5 1.24.56 2.12.06l14.86-8.37z"
                            fill="url(#paint2_linear)"
                          />
                          <path
                            d="M33.9 23.36l-14.87-8.38c-.88-.5-1.65-.43-2.12.06l12.7 12.58 4.29-4.26z"
                            fill="url(#paint3_linear)"
                          />
                          <path
                            opacity=".2"
                            d="M33.8 31.79L19.04 40.1c-.83.46-1.57.43-2.04.01l-.07.07.07.07c.48.43 1.21.46 2.04 0l14.87-8.38-.1-.1z"
                            fill="#000"
                          />
                          <path
                            opacity=".12"
                            d="M16.92 40.05c-.3-.31-.47-.8-.47-1.41v.15c0 .62.18 1.1.47 1.41l.07-.07-.07-.08zM38.88 28.93l-5.08 2.86.09.09 4.98-2.8c.7-.41 1.06-.94 1.06-1.46-.05.47-.4.95-1.05 1.3z"
                            fill="#000"
                          />
                          <path
                            opacity=".25"
                            d="M19.03 15.12l19.85 11.19c.64.36 1 .82 1.06 1.3 0-.52-.35-1.05-1.06-1.45L19.03 14.98c-1.43-.8-2.59-.13-2.59 1.49v.15c0-1.63 1.17-2.3 2.59-1.5z"
                            fill="#fff"
                          />
                          <path
                            d="M48.37 20.55V14.5h1.88c.93 0 1.69.28 2.25.84.55.56.84 1.29.84 2.19 0 .9-.29 1.62-.84 2.19a3.1 3.1 0 01-2.26.83h-1.87zm.79-.74h1.08c.7 0 1.26-.2 1.67-.6.42-.41.63-.97.63-1.7 0-.71-.2-1.26-.63-1.67a2.3 2.3 0 00-1.67-.6h-1.08v4.57zM54.44 20.55V14.5h.78v6.05h-.78zM58.34 20.69c-.45 0-.88-.15-1.3-.44a2 2 0 01-.84-1.21l.71-.28c.08.33.26.61.52.84.27.23.56.34.9.34.33 0 .63-.1.87-.26a.85.85 0 00.37-.73c0-.33-.12-.6-.37-.78a3.86 3.86 0 00-1.15-.51 3.12 3.12 0 01-1.23-.66c-.27-.27-.42-.6-.42-1.03 0-.43.18-.8.52-1.13.35-.32.8-.48 1.36-.48a2 2 0 011.26.38c.32.25.54.54.63.84l-.71.3c-.05-.2-.18-.38-.38-.54-.2-.16-.46-.25-.78-.25-.3 0-.56.09-.78.26a.76.76 0 00-.31.62c0 .22.1.42.3.58.19.15.48.29.86.41.3.1.55.2.75.28.2.1.4.22.61.37.2.15.37.33.47.55a1.86 1.86 0 01-.02 1.57c-.12.23-.28.41-.49.54a2.27 2.27 0 01-1.35.41zM62.29 20.55h-.79V14.5h2.08c.52 0 .97.17 1.34.51.38.35.57.77.57 1.3 0 .51-.19.94-.57 1.29-.37.34-.82.51-1.34.51h-1.3v2.44zm0-3.2h1.31c.33 0 .6-.1.8-.33.2-.22.29-.46.29-.72 0-.27-.1-.5-.3-.73-.2-.22-.46-.33-.79-.33h-1.31v2.12zM71.48 19.77a3 3 0 01-2.24.92 3.08 3.08 0 01-3.13-3.16c0-.88.29-1.64.89-2.24a3 3 0 012.24-.92 3.1 3.1 0 013.15 3.16c0 .88-.31 1.63-.91 2.24zm-3.9-.5c.45.45 1 .67 1.66.67.65 0 1.21-.22 1.66-.68.45-.45.68-1.03.68-1.73a2.33 2.33 0 00-2.34-2.42c-.65 0-1.21.23-1.66.68a2.37 2.37 0 00-.68 1.74c0 .7.23 1.28.68 1.73zM73.48 20.55V14.5h.96l2.97 4.71h.03l-.03-1.17V14.5h.79v6.05h-.82l-3.1-4.93h-.03l.03 1.17v3.76h-.8zM79.6 20.55V14.5h.77v6.05h-.78zm.72-6.53h-.68l.45-1.07h.85l-.62 1.07zM83.29 20.55l-2.15-6.05H82l1.67 4.91h.03l1.75-4.91h.87l-2.22 6.05h-.81zM90.78 15.25H88v1.91h2.5v.73H88v1.92h2.78v.74H87.2V14.5h3.57v.75zM92 20.55V14.5h.78v5.3h2.65v.75H92zM98.46 20.55V14.5h.96l2.97 4.71h.03l-.03-1.17V14.5h.78v6.05h-.81l-3.1-4.93h-.03l.03 1.17v3.76h-.8zM109.57 19.77a3 3 0 01-2.24.92 3.09 3.09 0 01-3.14-3.16c0-.88.3-1.64.9-2.24a3 3 0 012.24-.92 3.1 3.1 0 013.14 3.16 3.1 3.1 0 01-.9 2.24zm-3.9-.5c.45.45 1 .67 1.66.67.65 0 1.2-.22 1.66-.68.45-.45.68-1.03.68-1.73a2.33 2.33 0 00-2.34-2.42c-.65 0-1.21.23-1.66.68a2.37 2.37 0 00-.68 1.74c0 .7.23 1.28.68 1.73z"
                            fill="#F5F5F5"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="28.48"
                              y1="16.22"
                              x2="11.55"
                              y2="33.31"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#00A0FF" />
                              <stop offset=".01" stopColor="#00A1FF" />
                              <stop offset=".26" stopColor="#00BEFF" />
                              <stop offset=".51" stopColor="#00D2FF" />
                              <stop offset=".76" stopColor="#00DFFF" />
                              <stop offset="1" stopColor="#00E3FF" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear"
                              x1="40.73"
                              y1="27.62"
                              x2="16.1"
                              y2="27.62"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFE000" />
                              <stop offset=".41" stopColor="#FFBD00" />
                              <stop offset=".78" stopColor="orange" />
                              <stop offset="1" stopColor="#FF9C00" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear"
                              x1="31.56"
                              y1="29.93"
                              x2="8.6"
                              y2="53.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF3A44" />
                              <stop offset="1" stopColor="#C31162" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear"
                              x1="13.72"
                              y1="7.61"
                              x2="23.98"
                              y2="17.96"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#32A071" />
                              <stop offset=".07" stopColor="#2DA771" />
                              <stop offset=".48" stopColor="#15CF74" />
                              <stop offset=".8" stopColor="#06E775" />
                              <stop offset="1" stopColor="#00F076" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </a>
                    </FooterContentTextImg>
                  </FooterContentText>
                </div>
              </div>
            </FooterContent>
            <FooterCompany>
              <FooterCompanyTitle>
                <svg
                  width="66"
                  height="48"
                  viewBox="0 0 66 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.9 33.9c0 2-2.5 4.4-4.5 4.4h-1.8V10.2c0-.3.3-.6.6-.6h5.1c.3 0 .6.3.6.6v23.7zm-8.4 8.7c0 1.2-.6 3.3-4.9 3.3-8.2 0-13.3-6.2-13.3-10.7v-25c0-.3.2-.6.5-.6H43c.3 0 .5.3.5.6v23.2a7 7 0 007 7h5v2.2zm8.2-35h-5.9c-1.3 0-2.3 1-2.3 2.2v28.5h-5c-2.6 0-4.8-2.2-4.8-4.9V9.8c0-1.2-1-2.2-2.3-2.2h-6c-1.2 0-2.2 1-2.2 2.2v25.4c0 8 9 12.8 15.4 12.8 4.3 0 7-2 7-5.5v-2.1h1.8c3.2 0 6.6-3.3 6.6-6.5v-24c0-1.3-1-2.3-2.3-2.3zm-35 30.2c0 .3-.2.6-.5.6H23a.6.6 0 01-.5-.6V14.6a7 7 0 00-7-7h-5V5.4c0-1.2.6-3.3 4.9-3.3 8.2 0 13.3 6.2 13.3 10.7v25zm-26 .6a.6.6 0 01-.6-.6V14.1c0-2 2.5-4.4 4.5-4.4h1.8v28.1c0 .3-.3.6-.6.6H2.7zm28.1-25.6c0-8-9-12.8-15.4-12.8-4.3 0-7 2-7 5.5v2.1H6.6C3.4 7.6 0 10.9 0 14.1v24c0 1.3 1 2.3 2.3 2.3h6c1.2 0 2.2-1 2.2-2.2V9.7h5c2.6 0 4.8 2.2 4.8 4.9v23.6c0 1.2 1 2.2 2.3 2.2h6c1.2 0 2.2-1 2.2-2.2V12.8z"
                    className="Path-xrtkpd-0 daCLVV"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>
                  © 2021 Nu Pagamentos S.A. 18.236.120/0001-58 Rua Capote
                  Valente, 39 - São Paulo, SP - 05409-000
                </p>
              </FooterCompanyTitle>
              <FooterMidia />
            </FooterCompany>
            <FooterLanguage>
              <ul>
                <li>
                  <input type="radio" name="radioName" value="1" checked />
                  <label>
                    <span>Português</span>
                  </label>
                </li>
                <li>
                  <input type="radio" name="radioName" value="2" />
                  <label>
                    <span>English</span>
                  </label>
                </li>
              </ul>
            </FooterLanguage>
          </div>
        </div>
      </div>
    </SectionFooter>
  </>
);

export default Footer;
