// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import range from "lodash/range";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import HelpPanel from "@cloudscape-design/components/help-panel";
import styles from "../styles.module.scss";
import Flashbar from "@cloudscape-design/components/flashbar";
import clsx from "clsx";

export function Breadcrumbs() {
  return (
    <BreadcrumbGroup
      items={[
        { text: "Home", href: "#" },
        { text: "Service", href: "#" },
      ]}
    />
  );
}

export function Containers() {
  const [count, setCount] = useState(2);
  return (
    <SpaceBetween size="l">
      {range(count).map((i) => (
        <Container
          key={i}
          header={
            <Header
              variant="h2"
              actions={
                <Button onClick={() => setCount(count - 1)}>Remove</Button>
              }
            >
              Demo container #{i + 1}
            </Header>
          }
        >
          <div className={styles.contentPlaceholder} />
        </Container>
      ))}
      <Button onClick={() => setCount(count + 1)}>Add container</Button>
    </SpaceBetween>
  );
}

export function Tools({ children }: { children: React.ReactNode }) {
  return <HelpPanel header={<h2>Overview</h2>}>{children}</HelpPanel>;
}

export function Navigation() {
  return (
    <SideNavigation
      header={{
        href: "#",
        text: "Service name",
      }}
      items={range(30).map((i) => ({
        type: "link",
        text: `Navigation #${i + 1}`,
        href: `#item-${i}`,
      }))}
    />
  );
}

export function Notifications() {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  return (
    <Flashbar
      items={[
        {
          type: "success",
          header: "Success message",
          dismissLabel: "Dismiss notification",
          dismissible: true,
          onDismiss: () => setVisible(false),
        },
      ]}
    />
  );
}

export function Footer({ legacyConsoleNav }: { legacyConsoleNav: boolean }) {
  return (
    <>
      <footer
        id="f"
        className={clsx(styles.footer, legacyConsoleNav && styles.legacyNav)}
      >
        © 2008 - 2020, Amazon Web Services, Inc. or its affiliates. All rights
        reserved
      </footer>
    </>
  );
}
