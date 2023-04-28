"use client";
import FormDisabledDemo from "@/components/form";
import { EllipsisOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { Button, Dropdown, Row, Col } from "antd";

const Content = () => (
  <>
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={20}>
        <div
          style={{
            background: "#F5F7FA",
          }}
        >
          <PageContainer
            header={{
              title: "Usuariosssss",
              ghost: true,
              breadcrumb: {
                items: [
                  {
                    path: "",
                    title: "home",
                  },
                  {
                    path: "",
                    title: "dashboard",
                  },
                  {
                    path: "",
                    title: "users",
                  },
                ],
              },
              extra: [
                <Button key="1">HH</Button>,
                <Button key="2">HH2</Button>,
                <Button key="3" type="primary">
                  HH3
                </Button>,
                <Dropdown
                  key="dropdown"
                  trigger={["click"]}
                  menu={{
                    items: [
                      {
                        label: "B1",
                        key: "1",
                      },
                      {
                        label: "B2",
                        key: "2",
                      },
                      {
                        label: "B3",
                        key: "3",
                      },
                    ],
                  }}
                >
                  <Button key="4" style={{ padding: "0 8px" }}>
                    <EllipsisOutlined />
                  </Button>
                </Dropdown>,
              ],
            }}
            tabBarExtraContent="测试tabBarExtraContent"
            // tabList={[
            //   {
            //     tab: "L1",
            //     key: "base",
            //     closable: false,
            //   },
            //   {
            //     tab: "L2",
            //     key: "info",
            //   },
            // ]}
            // tabProps={{
            //   type: "editable-card",
            //   hideAdd: true,
            //   onEdit: (e, action) => console.log(e, action),
            // }}
            // footer={[
            //   <Button key="3">f</Button>,
            //   <Button key="2" type="primary">
            //     g
            //   </Button>,
            // ]}
          >
            <FormDisabledDemo />
          </PageContainer>
        </div>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
    </Row>
  </>
);

export default Content;
