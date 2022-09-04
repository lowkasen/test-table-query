// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from "react";
import type { NextPage } from "next";
import { Button } from "@cloudscape-design/components";
import Alert from "@cloudscape-design/components/alert";
import AppLayout from "@cloudscape-design/components/app-layout";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Breadcrumbs, Containers } from "./utils/content-blocks";
import appLayoutLabels from "./utils/labels";

const DarkHeaderMainPage: NextPage = () => {
  const [alertVisible, setVisible] = useState(true);
  return (
    <AppLayout
      contentType="form"
      ariaLabels={appLayoutLabels}
      breadcrumbs={<Breadcrumbs />}
      contentHeader={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link>Info</Link>}
            description="When you create an Amazon CloudFront distribution."
            actions={<Button variant="primary">Create distribution</Button>}
          >
            Create distribution
          </Header>
          {alertVisible && (
            <Alert
              dismissible={true}
              dismissAriaLabel="Close alert"
              onDismiss={() => setVisible(false)}
            >
              Demo alert
            </Alert>
          )}
        </SpaceBetween>
      }
      content={<Containers />}
    />
  );
};

export default DarkHeaderMainPage;
