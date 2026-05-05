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
        <div className="px-8 py-6">
          <div className="border border-divider bg-bg-soft overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3E0m_G5AEy5KBxLK21D2XeJnd5vLbA85Wp7ZjlCuQudS8L5oiS6Ox8WANUXpTB0YMWNwCkhBw8?gv=true"
              title="Réserver un rendez-vous avec Klora"
              className="w-full h-[600px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
