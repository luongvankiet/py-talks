import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
              {/* <Avatar className="w-20 h-20">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{selectedStudent?.name}</AvatarFallback>
              </Avatar> */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2">
                <img
                  src={
                    selectedStudent?.image ||
                    `${import.meta.env.VITE_APP_URL}/images/placeholder.jpeg`
                  }
                  alt={selectedStudent?.name}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="font-bold text-lg">{selectedStudent?.name}</h4>
                  <p className="text-xs text-gray-600 italic">
                    {selectedStudent?.role}
                  </p>
                </div>

                <p className="text-md text-gray-600">{selectedStudent?.bio}</p>

                <div className="flex flex-row items-center space-x-4 mb-4 md:mb-0">
                  <Button
                    variant="link"
                    className="cursor-pointer"
                    onClick={() => {
                      window.open(selectedStudent?.linkedIn, "_blank");
                    }}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <a href={`mailto:${selectedStudent?.gmail}`} className="">
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
