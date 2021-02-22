import { css } from '@emotion/core';
import Container from 'components/Container';
import Layout from 'components/Layout';
import { useTheme } from 'components/Theming';
import React from 'react';

import { rhythm } from '../lib/typography';

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site} noSubscribeForm="true">
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <h2
          css={css({
            marginBottom: rhythm(0.3),
            transition: 'all 150ms ease',
            ':hover': {
              color: theme.colors.primary,
            },
          })}
        >
          Legal Notice & Privacy Policy (German: Impressum)
        </h2>
        <div>
          <p>Angaben gemäß § 5 TMG</p>
          <p>Simon Zengerling Falkenweg 2D 48366 Laer</p>
          <p>
            {' '}
            <strong>Vertreten durch: </strong>
            Simon Zengerling
          </p>
          <p>
            <strong>Kontakt: </strong>
            Telefon: +49 1716511983 E-Mail:{' '}
            <a href="mailto:simonschulte1991@gmail.com">
              simonschulte1991@gmail.com
            </a>
          </p>
          <p>
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:{' '}
            </strong>
            Simon Zengerling Falkenweg 2D 48366 Laer{' '}
          </p>
          <p>
            <strong>Haftungsausschluss: </strong>
          </p>
          <strong>Haftung für Inhalte </strong>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <strong>Haftung für Links</strong>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <strong>Urheberrecht</strong>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
          <strong>Datenschutz</strong>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin,
            dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
            der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der
            Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
          <strong>Goatcounter</strong>
          <p>
          Diese Website benutzt Goatcounter, einen Webanalysedienst von Martin
          Tournoij (goatcounter.com). Goatcounter verwendet keine persönlichen
          Informationen und benötigt deswegen eigentlich auch keinen Eintrag in
          dieser Eklärung.{' '}
          <a href="https://www.goatcounter.com/gdpr">Goatcounter GDPR</a>
          </p>
          <p>
            Impressum vom{' '}
            <a href="https://www.impressum-generator.de">Impressum Generator</a>{' '}
            der{' '}
            <a href="https://www.kanzlei-hasselbach.de/standorte/bonn/">
              Kanzlei Hasselbach, Bonn
            </a>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
