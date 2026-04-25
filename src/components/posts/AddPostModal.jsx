"use client";
import React from "react";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { handleAddPost } from "@/action/addPostAction";

const AddPostModal = () => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">Add New Post</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <CirclePlus className="size-5" />
                </Modal.Icon>

                <Modal.Heading>Add Post</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={handleAddPost} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                      <Label>Post Title</Label>
                      <Input placeholder="Enter your post title" />
                    </TextField>

                    <TextField className="w-full" name="description">
                      <Label>Description</Label>
                      <Input placeholder="Enter your description" />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button type="submit" slot="close">
                        Add
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AddPostModal;
