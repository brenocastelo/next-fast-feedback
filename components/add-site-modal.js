import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton
} from "@chakra-ui/modal";
import { createSite } from "lib/database";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();
  const initialRef = useRef();

  const onCreateSite = (values) => createSite(values);

  return (
    <>
      <Button maxW={200} onClick={onOpen}>
        Add your fist site
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />

        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add site</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <FormLabel fontWeight="bold">Name</FormLabel>
              <Input ref={initialRef} mb={10} {...register("name")} />

              <FormLabel fontWeight="bold">Link</FormLabel>
              <Input {...register("link")} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={4} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={onClose} backgroundColor="#20B2AA">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
