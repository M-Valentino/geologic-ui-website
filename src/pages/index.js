import Head from "next/head";
import Image from "next/image";
import { Button, Center, Blink, HR } from "geologic-ui";

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
        <meta name="keywords" content="component library, ui, React, geocities, npm, 90's, retro" />
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

      <main>
        <Center>
          <h1 style={{ color: "#080" }}>Geologic UI</h1>
        </Center>
        <p>
          Geologic UI is a component library inspired by 90's style web design
          on Geocities. It contains buttons, horizontal rules, an HTML5
          compliant center tag, and an HTML5 compliant Blink tag. More
          components are soon to come. It is compatible with Next.js and React.{" "}
          <a href="https://github.com/M-Valentino/geologic-ui">
            Geologic UI is open source and it's repo can be found on GitHub
          </a>
          .
        </p>
        <pre>{`npm i geologic-ui`}</pre>
        <div className="warning">Note</div>
        <div>Geologic UI only supports three digit hex colors like "#02a".</div>

        <HR size="lg" color="#080" />
        <h2>Importing Components</h2>
        <p>Simply import componets like this:</p>
        <pre>{`import { Button, Center, Blink, HR } from "geologic-ui";`}</pre>
        <HR size="sm" color="#080" />
        <h2>Blink</h2>
        <Blink>
          <p className="bigText">This text blinks!</p>
        </Blink>
        <h3>Usage</h3>
        <pre>{`<Blink><p>This text blinks!</p></Blink>`}</pre>
        <HR size="sm" color="#080" />
        <h2>Button</h2>
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
        <h2>Center</h2>
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
        <h2>HR</h2>
        <HR size="sm" color="#f00" />
        <HR size="md" color="#f80" />
        <HR size="lg" color="#ff0" />
        <HR size="xl" color="#8f0" />
        <h3>Usage</h3>
        <pre>
          {`<HR size="sm" color="#f00"/>
<HR size="md" color="#f80"/>
<HR size="lg" color="#ff0"/>
<HR size="xl" color="#8f0"/>`}
        </pre>
      </main>
    </>
  );
}
