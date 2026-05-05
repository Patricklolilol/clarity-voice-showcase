import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-none border-divider bg-background p-0">
        <DialogHeader className="border-b border-divider px-8 pt-8 pb-6">
          <p className="label-eyebrow text-accent">Démo · 15 minutes</p>
          <DialogTitle className="font-serif text-3xl font-light text-foreground">
            Réservez votre démonstration
          </DialogTitle>
          <p className="text-sm text-text-muted font-light pt-2">
            Choisissez un créneau qui vous convient. Gratuit, sans engagement.
          </p>
        </DialogHeader>
        <div className="px-8 py-10">
          <div className="flex h-80 items-center justify-center border border-divider bg-bg-soft">
            <p className="label-eyebrow text-text-muted">Calendly embed goes here</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
