import type { NextPage } from "next";
import range from "lodash/range";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import AppLayout from "@cloudscape-design/components/app-layout";
import { useState } from "react";
import {
  Alert,
  BreadcrumbGroup,
  Button,
  Container,
  Form,
  FormField,
  Header,
  HelpPanel,
  Icon,
  Input,
  Link,
  Modal,
  SideNavigation,
  SpaceBetween,
} from "@cloudscape-design/components";

const Home: NextPage = () => {
  const [alertVisible, setAlertVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppLayout
      contentType="form"
      contentHeader={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link>Info</Link>}
            description={`Portal to find card balances. Env variable: ${process.env.APIKEY}. v3`}
            actions={<Button variant="primary">Query Card Balance</Button>}
          >
            Query Card Balance
          </Header>
          {alertVisible && (
            <Alert
              dismissible={true}
              dismissAriaLabel="Close alert"
              onDismiss={() => setAlertVisible(false)}
            >
              This is a Demo interface for the web portal from AWS using the
              CloudScape design system.
            </Alert>
          )}
        </SpaceBetween>
      }
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "#" },
            // { text: "Service", href: "#" },
          ]}
        />
      }
      content={
        <>
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button variant="link">Cancel</Button>
                <Button variant="primary" onClick={() => setModalVisible(true)}>
                  Submit
                </Button>
              </SpaceBetween>
            }
            // errorText="This is an error!"
          >
            <SpaceBetween direction="vertical" size="l">
              <Container
                header={
                  <Header description="Please input card details" variant="h2">
                    Submit Card Details
                  </Header>
                }
              >
                <SpaceBetween direction="vertical" size="l">
                  <FormField
                    description="Please enter the Embed Card ID"
                    label="Card ID"
                  >
                    <Input
                      value={inputValue}
                      onChange={(event) => setInputValue(event.detail.value)}
                    />
                  </FormField>
                </SpaceBetween>
              </Container>
            </SpaceBetween>
          </Form>
          <Modal
            header="Card details"
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            closeAriaLabel="Close modal"
            footer={
              <span style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <Button variant="link">Cancel</Button> */}
                <Button
                  variant="primary"
                  onClick={() => setModalVisible(false)}
                >
                  OK
                </Button>
              </span>
            }
          >
            <p>
              <b>CardID:</b> {inputValue}
            </p>
            <p>
              <b>Balance:</b> 99999 SGD
            </p>
            <p>
              <b>Transaction details:</b> ...
            </p>
          </Modal>
        </>
      }
      navigation={
        <SideNavigation
          header={{
            href: "#",
            text: "KS HelloWorld CloudScape",
          }}
          items={range(30).map((i) => ({
            type: "link",
            text: `Navigation #${i + 1}`,
            href: `#item-${i}`,
          }))}
        />
      }
      tools={
        <HelpPanel
          footer={
            <div>
              <h3>
                Learn more <Icon name="external" />
              </h3>
              <ul>
                <li>
                  <a href="">Link to documentation</a>
                </li>
                <li>
                  <a href="">Link to documentation</a>
                </li>
              </ul>
            </div>
          }
          header={<h2>Help panel title (h2)</h2>}
        >
          <div>
            <p>
              This is a paragraph with some <b>bold text</b> and also some{" "}
              <i>italic text</i>.
            </p>

            <h3>h3 section header</h3>
            <ul>
              <li>Unordered list item.</li>
              <li>Unordered list item.</li>
            </ul>

            <h4>h4 section header</h4>
            <p>
              Code can be formatted as lines of code or blocks of code. Add
              inline code <code>like this</code> using a <code>{"<code>"}</code>{" "}
              tag.
            </p>

            <h5>h5 section header</h5>
            <dl>
              <dt>This is a term</dt>
              <dd>This is its description.</dd>
              <dt>This is a term</dt>
              <dd>This is its description</dd>
            </dl>
          </div>
        </HelpPanel>
      }
    />
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <Button>Hello!</Button>
    //     <Button>Hello2!</Button>
    //   </main>
    // </div>
  );
};

export default Home;
