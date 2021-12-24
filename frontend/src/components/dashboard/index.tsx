import { useState, useEffect } from "react";
import {
  Window,
  WorkArea,
  TitleArea,
  Title,
  Content,
  LearnMore,
  FormArea,
  FromField,
  Line,
  LineColumn1,
  LineColumn2,
  AmountBox,
  Networks,
  //   Amount_100,
  //   Amount_10,
  ToAddress,
  SendBtn,
} from "./index.styled";
import { ethers } from "ethers";
import Abi from "../../contract/abi.json";

declare let window: any;

const Dashboard = () => {
  //   const [myAddress, setMyAddress] = useState(null);
  const myContract = new ethers.Contract(
    "0x9Dc0AD391c8b4b3026Fe8352D41704a2722a388E",
    Abi
  );

  const [check_100, setCheck_100] = useState<boolean>(false);
  const [check_10, setCheck_10] = useState<boolean>(false);
  const [toAddress, setToAddress] = useState<string>("");

  useEffect(() => {
    handleConnect();
  }, []);

  const handleConnect = () => {
    if (window.ethereum) {
      try {
        window.ethereum.enable().then((res: any) => {
          //   console.log("public key is ", window.ethereum.selectedAddress);
          //   setMyAddress(window.ethereum.selectedAddress);
          if (res) {
            // getBalance();
          }
        });
      } catch (e) {}
    } else if (window.web3) {
    } else {
      alert("You have to install MetaMask !");
    }
  };

  //   const getBalance = async () => {
  //     if (window.ethereum) {
  //       try {
  //         var provider = new ethers.providers.Web3Provider(window.ethereum);
  //         setMyAddress(window.ethereum.selectedAddress);
  //         const signer = provider.getSigner();
  //         var MyContract = myContract.connect(signer);
  //         console.log(MyContract);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };

  const send = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    var MyContract = myContract.connect(signer);
    var tx = await MyContract.transfer(toAddress, 100).catch((err: any) => {
      console.log(err);
    });

    if (tx !== undefined) {
      // setDepositWait(true);
      // await tx.wait();
      // setAvailable(true);
    }
  };

  return (
    <Window>
      <WorkArea>
        <TitleArea>
          <Title>Request testnet LINK</Title>
          <Content>
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can create and test your own oracle and Chainlinked
            smart contract.
          </Content>
          <LearnMore>Learn more</LearnMore>
        </TitleArea>

        <FormArea>
          <Line>
            <LineColumn1>
              <FromField>Network</FromField>
            </LineColumn1>
            <LineColumn2>
              <FromField>Testnet account address</FromField>
            </LineColumn2>
          </Line>
          <Line>
            <LineColumn1>
              <Networks>
                <option>Fantom</option>
              </Networks>
            </LineColumn1>
            <LineColumn2>
              <ToAddress
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
              />
            </LineColumn2>
          </Line>
          <Line>
            <LineColumn1>
              <FromField>Request type</FromField>
            </LineColumn1>
          </Line>
          <Line>
            <LineColumn1>
              <AmountBox>
                <input
                  type="checkbox"
                  checked={check_100}
                  onChange={() => setCheck_100(!check_100)}
                />
                100 test SDH
              </AmountBox>
            </LineColumn1>
            <LineColumn2>
              <AmountBox>
                <input
                  type="checkbox"
                  checked={check_10}
                  onChange={() => setCheck_10(!check_10)}
                />
                10 test SDH
              </AmountBox>
            </LineColumn2>
          </Line>
          {/* <Amount_100 />
        <Amount_10 /> */}

          <SendBtn onClick={() => send()}>Send request</SendBtn>
        </FormArea>
      </WorkArea>
    </Window>
  );
};

export default Dashboard;
