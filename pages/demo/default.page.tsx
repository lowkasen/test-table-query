// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from "react";
import AppLayout from "@cloudscape-design/components/app-layout";
import Header from "@cloudscape-design/components/header";
import {
  Containers,
  Navigation,
  Tools,
  Breadcrumbs,
} from "./utils/content-blocks";
import * as toolsContent from "./utils/tools-content";
import labels from "./utils/labels";

export default function () {
  return (
    <AppLayout
      ariaLabels={labels}
      breadcrumbs={<Breadcrumbs />}
      navigation={<Navigation />}
      tools={<Tools>{toolsContent.long}</Tools>}
      content={
        <>
          <div style={{ marginBottom: "1rem" }}>
            <Header variant="h1" description="Basic demo">
              Demo page
            </Header>
          </div>
          <Containers />
        </>
      }
    />
  );
}
