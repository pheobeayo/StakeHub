
import {
  Accordion,
  Badge,
  Container,
  Divider,
  Flex,
  Tabs,
  Text,
  TextInput,
  Button,
  Code,
} from "@mantine/core";

import { faqs } from "../../data";

function Stake() {
  return (
    <div>
      <div className="stake_container">
        <div className="header">
          <h3>StakeHub </h3>
          <p>Stake Hedera here and get annual reward of 4.21%</p>
        </div>
        <Tabs
          defaultValue={"stake"}
          styles={{
            tab: {
              "&[data-active]": {
                backgroundColor: "#9B31B3",
                color: "white",
              },
            },
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="stake">STAKE</Tabs.Tab>
            <Tabs.Tab value="unstake">UNSTAKE</Tabs.Tab>
            <Tabs.Tab value="claim">CLAIM</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="stake">
            <div className="stake_panel">
              <div className="stake_panel_stake">
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                  }}
                  p={20}
                >
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Available to stake </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Badge
                        pl={5}
                        pr={1}
                        size="md"
                        styles={{
                          root: { flexDirection: "row-reverse", gap: "5px" },
                        }}
                        variant="dot"
                        radius={0}
                      >
                        Oxbaaf...75cec7
                      </Badge>
                    </div>
                  </Flex>
                  <Divider mt={20} mb={20} />
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Staked amount </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Text size={13}>ARP ? </Text>
                      <Text color="green" size={20}>
                        4.21%
                      </Text>
                    </div>
                  </Flex>
                </Container>
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                  }}
                  p={20}
                  mt={20}
                >
                  <TextInput
                    size="md"
                    placeholder="Amount"
                    rightSectionWidth={60}
                    rightSection={
                      <Code
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        bg={"#F2EBF7"}
                      >
                        Max
                      </Code>
                    }
                  />
                  <Flex mt={15} gap={15}>
                    <Button
                      color={"violet.5"}
                      size="md"
                      fullWidth
                      variant="outline"
                    >
                      Unlock stake
                    </Button>
                    <Button color={"violet.5"} size="md" fullWidth>
                      Stake now
                    </Button>
                  </Flex>
                  <Flex mt={30} gap={8} direction={"column"}>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        Staking reward
                      </Text>
                      <Text size={15}>0.000HBAR </Text>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        Gas fee
                      </Text>
                      <Text size={15}>0.000HBAR</Text>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        Reward fee
                      </Text>
                      <Text size={15}>10%</Text>
                    </Flex>
                  </Flex>
                </Container>
              </div>
              <h3 style={{ color: "#36164A", margin: "25px 0px 25px 0px" }}>
                StakeHub Statistics
              </h3>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="unstake">
            <div className="stake_panel">
              <div className="stake_panel_stake">
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                  }}
                  p={20}
                >
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Available to stake </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Badge
                        pl={5}
                        pr={1}
                        size="md"
                        styles={{
                          root: { flexDirection: "row-reverse", gap: "5px" },
                        }}
                        variant="dot"
                        radius={0}
                      >
                        Oxbaaf...75cec7
                      </Badge>
                    </div>
                  </Flex>
                  <Divider mt={20} mb={20} />
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Staked amount </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Text size={13}>ARP ? </Text>
                      <Text color="green" size={20}>
                        4.21%
                      </Text>
                    </div>
                  </Flex>
                </Container>
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                  }}
                  p={20}
                  mt={20}
                >
                  <Badge
                    mb={30}
                    p={18}
                    radius={5}
                    h={"max-content"}
                    bg={"#F6E1FB"}
                    styles={{
                      inner: {
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        whiteSpace: "wrap",
                        textTransform: "none",
                        textAlign: "center",
                      },
                    }}
                  >
                    Default HBAR unstaking period takes between 5-7 days (83
                    epoch) to process. After which you can claim your reward in
                    the claim tab
                  </Badge>
                  <TextInput
                    size="md"
                    placeholder="Amount"
                    rightSectionWidth={60}
                    rightSection={
                      <Code
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        bg={"#F2EBF7"}
                      >
                        Max
                      </Code>
                    }
                  />
                  <Flex mt={15} gap={15}>
                    <Button color={"violet.5"} size="md" fullWidth>
                      Unstake
                    </Button>
                  </Flex>
                  <Flex mt={30} gap={8} direction={"column"}>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        Staking reward
                      </Text>
                      <Text size={15}>0.000HBAR </Text>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        You will receive
                      </Text>
                      <Text size={15}>0.000HBAR</Text>
                    </Flex>
                  </Flex>
                </Container>
              </div>
              <h3 style={{ color: "#36164A", margin: "25px 0px 25px 0px" }}>
              StakeHub Statistics
              </h3>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="claim">
            <div className="stake_panel">
              <div className="stake_panel_stake">
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                  }}
                  p={20}
                >
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Available to stake </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Badge
                        pl={5}
                        pr={1}
                        size="md"
                        styles={{
                          root: { flexDirection: "row-reverse", gap: "5px" },
                        }}
                        variant="dot"
                        radius={0}
                      >
                        Oxbaaf...75cec7
                      </Badge>
                    </div>
                  </Flex>
                  <Divider mt={20} mb={20} />
                  <Flex justify={"space-between"}>
                    <div>
                      <Text size={13}>Staked amount </Text>
                      <h4>0.0HBAR</h4>
                    </div>
                    <div>
                      <Text size={13}>ARP ? </Text>
                      <Text color="green" size={20}>
                        4.21%
                      </Text>
                    </div>
                  </Flex>
                </Container>
                <Container
                  style={{
                    border: "1px solid whitesmoke",
                    borderRadius: "5px",
                    backgroundColor: "#FEFAFF",
                  }}
                  p={20}
                  mt={20}
                >
                  <Badge
                    mb={30}
                    p={18}
                    radius={5}
                    h={"max-content"}
                    bg={"#F6E1FB"}
                    styles={{
                      inner: {
                        color: "black",
                        fontWeight: "500",
                        fontSize: "12px",
                        whiteSpace: "wrap",
                        textTransform: "none",
                        textAlign: "center",
                      },
                    }}
                  >
                    You will be able to claim your rewards after the withdraw
                    request has been processed. to unstake your HBAR, go to the
                    Unstake tab
                  </Badge>

                  <Container
                    style={{
                      border: "1px solid whitesmoke",
                      borderRadius: "5px",
                    }}
                    p={15}
                    bg={"white"}
                    mb={20}
                  >
                    <Flex align={"center"} justify={"space-between"}>
                      <div>
                        <Text color="#5B5B5B" size={12}>
                          Total claimable rewards
                        </Text>
                        <Text weight={"700"} size={16}>
                          0.0HBAR
                        </Text>
                      </div>
                      <div>
                        <Text color="#5B5B5B" size={12}>
                          Pending rewards
                        </Text>
                        <Text align="right" weight={"700"} size={16}>
                          0.0HBAR
                        </Text>
                      </div>
                    </Flex>
                  </Container>

                  <Button color={"violet.5"} size="md" fullWidth>
                    Claim 0.0HBAR
                  </Button>
                  <Flex mt={30} gap={8} direction={"column"}>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        Staking reward
                      </Text>
                      <Text size={15}>0.000HBAR </Text>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"}>
                      <Text color="#5B5B5B" size={15}>
                        You will receive
                      </Text>
                      <Text size={15}>0.000HBAR</Text>
                    </Flex>
                  </Flex>
                </Container>
              </div>
              <h3 style={{ color: "#36164A", margin: "25px 0px 25px 0px" }}>
              StakeHub Staking Statistics
              </h3>
            </div>
          </Tabs.Panel>
        </Tabs>
        <div className="stake_panel">
          <div className="stake_panel_stake">
            <Flex gap={8} direction={"column"}>
              <Flex align={"center"} justify={"space-between"}>
                <Text color="#5B5B5B" size={16}>
                  Annual percentage rate{" "}
                </Text>
                <Text size={16}>4.21% </Text>
              </Flex>
              <Flex align={"center"} justify={"space-between"}>
                <Text color="#5B5B5B" size={16}>
                  Total stake on StakeHub{" "}
                </Text>
                <Text size={16}>224,302,602.334</Text>
              </Flex>
              <Flex align={"center"} justify={"space-between"}>
                <Text color="#5B5B5B" size={16}>
                  Stakers{" "}
                </Text>
                <Text size={16}>3,247</Text>
              </Flex>
              <Flex align={"center"} justify={"space-between"}>
                <Text color="#5B5B5B" size={16}>
                  HBAR market capital{" "}
                </Text>
                <Text size={16}>$232,106,665</Text>
              </Flex>
            </Flex>
          </div>
        </div>
        <h3 style={{ color: "#36164A", margin: "35px 0px 25px 0px" }}>FAQ</h3>
        <Accordion>
          {faqs.map(({ id, question }) => (
            <Accordion.Item value={"_" + id + ""}>
              <Accordion.Control>{question}</Accordion.Control>
              <Accordion.Panel></Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Stake;
