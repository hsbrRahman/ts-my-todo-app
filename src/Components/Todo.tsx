import {
  Text,
  Flex,
  Container,
  Center,
  Paper,
  ActionIcon,
} from "@mantine/core";
import { useState, useEffect } from "react";

import { IconCircleCheck, IconTrash } from "@tabler/icons-react";

type Task = {
  task: string;
  id: string;
  completed: boolean;
};
type props = {
  todo: Task;
  removeTodo: (id: string) => void;
  editTodo: (id: string) => void;
  handleToggle: (id: string) => void;
};
const Todo: React.FC<props> = ({
  todo,
  removeTodo,
  editTodo,
  handleToggle,
}) => {
  const [status, setStatus] = useState<boolean>(todo.completed);
  const [line, setLine] = useState<string>("");
  useEffect(() => {
    if (status) {
      setLine("line-through");
    } else {
      setLine("md");
    }
  }, [status]);
  const toggleComplete = (id: string) => {
    handleToggle(id);
    setStatus(!status);
  };
  // const [newTask, setNewTask] = useState<string>("");
  // console.log(newTask);
  // const todoEditSubmitHandler = () => {
  //   editTodo(newTask);
  //   modals.closeAll();
  // };
  return (
    <Center>
      <Paper shadow="xl" radius="xl" p="xs" withBorder w={"50%"}>
        <Flex
          mih={26}
          maw={"100%"}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <ActionIcon
            onClick={() => {
              toggleComplete(todo.id);
            }}
            color="green"
            size={"30"}
            ml={20}
          >
            <IconCircleCheck size={"30"} />
          </ActionIcon>

          <Container>
            <Flex wrap="wrap" c={"white"} classNames={"test"}>
              {status ? (
                <Text td={line}>{todo.task}</Text>
              ) : (
                <Text fz={line}>{todo.task}</Text>
              )}
            </Flex>
          </Container>
          {/* <Space h="md"></Space> */}
          <Flex gap={"xs"} justify={"space-evenly"} mr={25}>
            {/* <Button
              onClick={() => {
                // editTodo(todo.id);
                modals.open({
                  title: "Edit Selected ToDo: ",
                  children: (
                    <>
                      <TextInput
                        label="Updated todo"
                        placeholder="Add task...."
                        data-autofocus
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <Button fullWidth onClick={todoEditSubmitHandler} mt="md">
                        Submit
                      </Button>
                    </>
                  ),
                });
              }}
              color="violet"
            >
              Edit
            </Button> */}
            {/* <Modal editTodo={editTodo} todo={todo} /> */}

            {/* <Button onClick={() => editTodo(todo.id)} color="violet">
              edit
            </Button> */}

            <ActionIcon
              onClick={() => removeTodo(todo.id)}
              color="red"
              size={"30"}
            >
              <IconTrash size={"30"} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Paper>
    </Center>
  );
};

export default Todo;
