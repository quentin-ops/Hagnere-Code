import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bienvenue</CardTitle>
          <CardDescription>
            Connectez-vous pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <Button variant="outline" className="w-full" type="submit">
              <IconBrandGoogle className="mr-2 h-5 w-5" />
              Continuer avec Google
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dashboard" });
            }}
          >
            <Button variant="outline" className="w-full" type="submit">
              <IconBrandGithub className="mr-2 h-5 w-5" />
              Continuer avec GitHub
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
