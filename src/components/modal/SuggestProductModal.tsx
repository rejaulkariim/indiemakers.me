import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const SuggestProductModal = () => {
  return (
    <div className="hidden md:flex">
      <Dialog>
        <DialogTrigger>
          <p className="text-xs text-muted-foreground">Suggest a Startup</p>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-sm">Suggest a Product</DialogTitle>

            <DialogDescription>
              <form className="space-y-4 mt-4">
                <Input placeholder="Link" />
                <Textarea placeholder="Descriptions" />
                <Button variant="outline" className="w-full">
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuggestProductModal;
