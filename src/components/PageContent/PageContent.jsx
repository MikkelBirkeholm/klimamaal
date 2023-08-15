import { Article } from './Article/Article'
import { SectionHeader } from './SectionHeader/SectionHeader'
import styles from './PageContent.module.scss'
import { Gallery } from '../Gallery/Gallery'
import { Form } from '../Form/Form'

const images = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
]

export const PageContent = () => {
  return (
    <main className={styles.pageContent}>
      <div className="content-wrapper">
        <SectionHeader
          title="DE 17 VERDENSMÅL"
          id="verdensmaal"
        >
          <p>
            Pa FN topmodet i New York i 2015 vedtog verdens stats- og
            regeringsledere en hidtil uset ambitiøs og samfundsforandrende
            udviklingsdagsorden, også kaldt 2030 dagsordenen.
          </p>
          <p>
            Frem til 2030 skal denne dagsorden sætte kurs mod en mere
            beeredygtig udvikling for både mennesker og planeten, vi bor pa.
          </p>
        </SectionHeader>
        <div className="articles-wrapper">
          <Article title="Verdensmålene forpligter">
            <p>
              Medlemslandende forpligter sig til helt at afskaffe fattigdom og
              sult i verden, sikre god uddannelse og sundhed til alle, reducere
              ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og
              forbrug.
              <br />
              <br /> Den nye dagsorden anerkender således at social, økonomisk
              og miljømæssig udvikling, fred, sikkerhed og internationalt
              samarbejde er tæt forbundet, og at det kræver en integreret
              indsats at opnå holdbare udviklingsresultater.
            </p>
          </Article>
          <Article title="Verdensmålene gælder alle">
            <p>
              Målene gælder alle lande - både rige og fattige - dvs. de er
              universelle.
              <br />
              <br />
              Udfordringer som social, økonomisk marginalisering, stigende
              ulighed, fødevareusikkerhed, ulig adgang til grundlæggende
              naturressourcer,og har regionale og globale konsekvenser.
              <br />
              <br /> Det er derfor afgørende at alle lande leverer og løfter
              opgaven i fællesskab.
            </p>
          </Article>
        </div>
        <SectionHeader
          title="DELMÅLENE"
          id="delmaal"
        >
          <p>
            FNs 17 Verdensmal er opdelt i 169 delmål. Delmålene er mere konkrete
            mål for, hordan Verdensmålene skal opfyldes. For at måle pa hvert
            delmål har FN formuleret en raekke indikatorer for de enkelte
            delmål.
          </p>
        </SectionHeader>
        <Gallery images={images} />
        <SectionHeader
          title="UDFORDRINGER"
          id="udfordringer"
        >
          <p>
            Der er en lang række faktorer der har indvirkning pa opfyldelsen af
            de mål, man gennem aftaler har forpligtiget sig til.
          </p>
        </SectionHeader>
        <div className="articles-wrapper">
          <Article
            title="Vækst vs. bæredygtighed"
            imgUrl={'/images/Image-Sustainability.jpg'}
          >
            <p>
              En overordnet udfordring er, at der mangler et mere nuanceret syn
              på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem
              økonomisk vækst og påvirkninger af miljø og samfund.
              <br />
              <br /> Opretholdes den nuværende globale, materielle vækst, øges
              presset på jordens ressourcer.
              <br />
              <br />
              De livsunderstøttende økosystemer bliver i stigende grad
              overbelastet, og uligheden i verden vil blive større.
            </p>
          </Article>
          <Article
            title="Leave no-one behind"
            imgUrl={'/images/Image-Leave-No-One.jpg'}
          >
            <p>
              I 2030-dagsordenen er inkluderet princippet om ”leave no one
              behind”. Princippet tilsiger, at alle lande skal opnå alle
              verdensmål, uden at nogen lades i stikken.
              <br />
              <br /> Arbejdet med verdensmålene skal begynde med, at de
              fattigste og mest marginaliserede adresseres først.
              <br />
              <br />
              Dette er et vigtigt princip, hvortil også efterlevelsen af og
              respekten for menneskerettigheder er altafgørende.
              <br />
              <br />
              Med andre ord: “Leave No-One behind”.
            </p>
          </Article>
          <Article
            title="Fattigdom og sult"
            imgUrl={'/images/Image-Hunger.jpg'}
          >
            <p>
              Det første af FNs verdensmål handler om at afskaffe verdens
              fattigdom inden 2030.
              <br />
              <br /> Det handler især om at give muligheder for mennesker i
              verdens fattigste lande. Verdensbanken definerer ”ekstrem
              fattigdom” som en personlig indkomst på under 1,9 dollars om dagen
              - dvs. cirka 13 kroner.
              <br />
              <br />
              En stor udfordring, men vi er allerede godt på vej.
            </p>
          </Article>
        </div>
        <SectionHeader
          title="KONTAKT OS"
          id="kontakt"
        >
          <p>
            Kontakt os og hør næmere om De Sytten Verdensmål. Udfyld formularen
            herunder.
          </p>
        </SectionHeader>
        <Form />
      </div>
    </main>
  )
}
