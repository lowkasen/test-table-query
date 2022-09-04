// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
// import Container from "@cloudscape-design/components/container/internal";
import AppLayout from "@cloudscape-design/components/app-layout";
import Flashbar from "@cloudscape-design/components/flashbar";

export default function StickyWithAppLayoutPage() {
  const [isSticky, setSticky] = useState(true);

  return (
    <AppLayout
      stickyNotifications={isSticky}
      notifications={
        <Flashbar
          items={[
            {
              type: "success",
              header: "Success message",
              buttonText: "Toggle sticky notifications",
              onButtonClick: () => setSticky((sticky) => !sticky),
            },
          ]}
        />
      }
      content={
        <article>
          <h1>Sticky container</h1>

          <div
            style={{ width: "100%", height: "100px", overflow: "auto" }}
            id="scrollable-div"
          ></div>

          <div style={{ width: "100%", height: "1000px" }}></div>
        </article>
      }
      navigationHide={true}
      toolsHide={true}
    />
  );
}
