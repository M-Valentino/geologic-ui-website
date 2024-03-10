import Head from "next/head";
import { iconNames } from "@/iconSRCs";
import {
  Blink,
  Button,
  Center,
  HR,
  Icon,
  UnderConstruction,
} from "geologic-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Geologic UI</title>
        <meta
          name="description"
          content=" Geologic UI is a React component library inspired by 90's style web design
          on Geocities. It contains buttons, horizontal rules, an HTML5 compliant
          center tag, and an HTML5 compliant Blink tag. More components are soon
          to come."
        />
        <meta name="author" content="Mark Valentino" />
        <meta
          name="keywords"
          content="component library, ui, React, geocities, npm, 90's, retro"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "${process.env.MS_CLARITY_ID}");`,
          }}
        />
      </Head>
      <div id="mainAndNavContainer">
        <nav id="desktopNav">
          <ul id="desktopNavUl">
            <li>
              <a href="#importing">Importing Components</a>
            </li>
            <li>
              <a href="#blink">Blink</a>
            </li>
            <li>
              <a href="#button">Button</a>
            </li>
            <li>
              <a href="#center">Center</a>
            </li>
            <li>
              <a href="#hr">HR</a>
            </li>
            <li>
              <a href="#icon">Icon</a>
            </li>
            <li>
              <a href="#underConstruction">UnderConstruction</a>
            </li>
          </ul>
        </nav>
        <main>
          <header>
            <Center>
              <span id="globe">
              <Icon name="earth" size="md" />
              </span>
              <h1>Geologic UI</h1>
            </Center>
          </header>
          <p>
            Geologic UI is a component library inspired by 90's style web design
            on Geocities. It contains buttons, horizontal rules, an HTML5
            compliant center tag, and an HTML5 compliant Blink tag. As a bonus,
            Geologic UI has a special construction tape component for when your
            site is getting renovated! It is compatible with Next.js and React.{" "}
            <a href="https://github.com/M-Valentino/geologic-ui">
              Geologic UI is open source and it's repo can be found on GitHub
            </a>
            .
          </p>
          <pre>{`npm i geologic-ui`}</pre>
          <div className="warning">Note</div>
          <div>
            Geologic UI only supports three digit hex colors like "#02a".
          </div>
          <HR size="lg" color="#080" />
          <h2 id="importing">Importing Components</h2>
          <p>Simply import componets like this:</p>
          <pre>{`import { 
  Blink, 
  Button, 
  Center, 
  HR, 
  Icon, 
  UnderConstruction 
} from "geologic-ui";`}</pre>
          <HR size="sm" color="#080" />
          <h2 id="blink">Blink</h2>
          <p>
            The blink tag was introduced as a non-stantand HTML tag on Netscape
            Navigator. No major browsers support it today, but you can bring the
            functionality back with the Blink component!
          </p>
          <Blink>
            <p className="bigText">This text blinks!</p>
          </Blink>
          <h3>Usage</h3>
          <pre>{`<Blink><p>This text blinks!</p></Blink>`}</pre>
          <HR size="sm" color="#080" />
          <h2 id="button">Button</h2>
          <Button label="Default Button" />
          <br />
          <Button size="sm" label="Small Button" />
          <Button size="md" label="Medium Button" />
          <Button size="lg" label="Large Button" />
          <Button size="xl" label="XL Button" />
          <br />
          <Button color="#faa" label="Colored Button" />
          <Button color="#5f0" label="Colored Button" />
          <Button color="#444" labelColor="#fff" label="Custom Label Color" />
          <h3>Usage</h3>
          <pre>
            {`<Button label="Default Button" />
<br />
<Button size="sm" label="Small Button" />
<Button size="md" label="Medium Button" />
<Button size="lg" label="Large Button" />
<Button size="xl" label="XL Button" />
<br />
<Button color="#faa" label="Colored Button" />
<Button color="#5f0" label="Colored Button" />
<Button color="#444" labelColor="#fff" label="Custom Label Color" />`}
          </pre>
          <HR size="sm" color="#080" />
          <h2 id="center">Center</h2>
          <p>
            The center tag was deprecated in HTML5, but the Center component
            brings this functionality back but with HTML5 compliance.
          </p>
          <Center>
            <Button
              color="#00f"
              labelColor="#ffa"
              label="I'm a Centered Button"
            />
          </Center>
          <h3>Usage</h3>
          <pre>
            {`<Center>
  <Button
    color="#00f"
    labelColor="#ffa"
    label="I'm a Centered Button"
  />
</Center>`}
          </pre>
          <HR size="sm" color="#080" />
          <h2 id="hr">HR</h2>
          sm
          <HR size="sm" color="#f00" />
          md
          <HR size="md" color="#f80" />
          lg
          <HR size="lg" color="#ff0" />
          xl
          <HR size="xl" color="#8f0" />
          <h3>Usage</h3>
          <pre>
            {`<HR size="sm" color="#f00"/>
<HR size="md" color="#f80"/>
<HR size="lg" color="#ff0"/>
<HR size="xl" color="#8f0"/>`}
          </pre>
          <HR size="sm" color="#080" />
          <h2 id="icon">Icon</h2>
          <p>
            Chose from a collection of 27x27 pixel art icons. Copy and paste the
            name of the icon to use it.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 80px)",
              gap: "10px",
            }}
          >
            {iconNames.map((data, key) => (
              <div key={key} style={{ textAlign: "center", fontSize: 10 }}>
                <Icon name={data} />
                <div>{data}</div>
              </div>
            ))}
          </div>
          <p>Icons can be scaled up too:</p>
          <Icon name="alien" size="sm" />
          <Icon name="alien" size="md" />
          <Icon name="alien" size="lg" />
          <Icon name="alien" size="xl" />
          <h3>Usage</h3>
          <pre>{`
<Icon name="alien" size="sm" />
<Icon name="alien" size="md" />
<Icon name="alien" size="lg" />
<Icon name="alien" size="xl" />
        `}</pre>
          <HR size="sm" color="#080" />
          <h2 id="underConstruction">UnderConstruction</h2>
          <p>
            This construction tape helps let your site visitors know that your
            site is only going to look bad temporarily.
          </p>
          sm
          <UnderConstruction size="sm" />
          md
          <UnderConstruction size="md" />
          lg
          <UnderConstruction size="lg" />
          xl
          <UnderConstruction size="xl" />
          <h3>Usage</h3>
          <pre>
            {`<UnderConstruction size="sm" />
<UnderConstruction size="md" />
<UnderConstruction size="lg" />
<UnderConstruction size="xl" />`}
          </pre>
          <HR size="sm" color="#080" />
          <footer>
            <a href="/privacy">Privacy</a>
          </footer>
        </main>
      </div>
    </>
  );
}
