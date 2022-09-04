// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { NextPage } from "next";
import AppLayout from "@cloudscape-design/components/app-layout";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import appLayoutLabels from "./utils/labels";
import { Breadcrumbs } from "./utils/content-blocks";
import styles from "./styles.module.scss";

const DarkHeaderNoOverlapPage: NextPage = () => {
  return (
    <AppLayout
      contentType="form"
      ariaLabels={appLayoutLabels}
      breadcrumbs={<Breadcrumbs />}
      contentHeader={
        <Header
          variant="h1"
          description="When you create an Amazon CloudFront distribution, you tell CloudFront where to find your content by specifying your origin servers."
        >
          Content header
        </Header>
      }
      disableContentHeaderOverlap={true}
      content={
        <Box padding={{ vertical: "xl" }}>
          <Box variant="h2" padding={{ bottom: "l" }}>
            Demo content
          </Box>
          <div className={styles.contentPlaceholder} />
        </Box>
      }
    />
  );
};

export default DarkHeaderNoOverlapPage;
