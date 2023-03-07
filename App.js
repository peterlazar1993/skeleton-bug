import { Skeleton } from "moti/skeleton";
import {  Text } from "react-native";


export default function App() {

  return (
    <Skeleton.Group show={true}>
      <Skeleton>
        <Text>Moti</Text>
      </Skeleton>
    </Skeleton.Group>
  );
}

