import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconLogout, IconUser } from "@tabler/icons-react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button variant="outline" type="submit">
            <IconLogout className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </form>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconUser className="h-5 w-5" />
            Profil
          </CardTitle>
          <CardDescription>Informations de votre compte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name || "Avatar"}
                className="h-16 w-16 rounded-full"
              />
            )}
            <div>
              <p className="text-lg font-medium">{session.user.name}</p>
              <p className="text-muted-foreground text-sm">
                {session.user.email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
