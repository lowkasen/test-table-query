// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { NextPage } from "next";
import AppLayout from "@cloudscape-design/components/app-layout";
import Container from "@cloudscape-design/components/container";
import Grid from "@cloudscape-design/components/grid";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import { Breadcrumbs } from "./utils/content-blocks";
import appLayoutLabels from "./utils/labels";

const DarkHeaderWithGridInContentPage: NextPage = () => {
  return (
    <AppLayout
      contentType="form"
      ariaLabels={appLayoutLabels}
      breadcrumbs={<Breadcrumbs />}
      contentHeader={
        <Header
          variant="h1"
          info={<Link>Info</Link>}
          description="When you create an Amazon CloudFront distribution."
        >
          Create distribution
        </Header>
      }
      content={
        <Grid gridDefinition={[{ colspan: 12 }]}>
          <Container
            header={
              <Header variant="h2" description="Container description">
                Container title
              </Header>
            }
          >
            Container content
          </Container>
        </Grid>
      }
    />
  );
};

export default DarkHeaderWithGridInContentPage;
