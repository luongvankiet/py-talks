import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Linkedin, Mail } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  selectedStudent: any;
}

const StudentDetailDialog = ({ open, onClose, selectedStudent }: Props) => {
  console.log(open);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Student Detail</DialogTitle>
          <DialogDescription>
            <div className="flex space-x-4 p-4">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{selectedStudent?.name}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="font-bold text-lg">{selectedStudent?.name}</h4>
                  <p className="text-xs text-gray-600 italic">
                    {selectedStudent?.role}
                  </p>
                </div>

                <p className="text-md text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis suscipit tempora minima architecto, nemo quia ea
                  magni ipsam fugiat nesciunt porro voluptate, qui earum,
                  repellendus sunt voluptatibus excepturi maiores. Adipisci.
                </p>

                <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
                  <Button
                    variant="link"
                    className=""
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/van-kiet-luong",
                        "_blank"
                      );
                    }}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <a href="mailto:luongvankiet.97@gmail.com" className="">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailDialog;
