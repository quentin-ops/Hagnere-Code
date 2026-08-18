CREATE TABLE "funnel_analytics_event" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_name" text NOT NULL,
	"path" text NOT NULL,
	"props" text DEFAULT '{}' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "funnel_analytics_event_name_created_at_idx" ON "funnel_analytics_event" USING btree ("event_name","created_at");--> statement-breakpoint
CREATE INDEX "funnel_analytics_event_path_created_at_idx" ON "funnel_analytics_event" USING btree ("path","created_at");