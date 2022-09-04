// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { NextPage } from "next";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import appLayoutLabels from "./utils/labels";
import { Breadcrumbs } from "./utils/content-blocks";
import styles from "./styles.module.scss";

const DarkHeaderHeadlessPage: NextPage = () => {
  return (
    <AppLayout
      contentType="form"
      ariaLabels={appLayoutLabels}
      breadcrumbs={<Breadcrumbs />}
      content={
        <Box padding={{ vertical: "l" }}>
          <Header variant="h1">Content header</Header>
          <div className={styles.contentPlaceholder} />
        </Box>
      }
    />
  );
};

export default DarkHeaderHeadlessPage;
