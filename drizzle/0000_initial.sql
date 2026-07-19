CREATE TABLE IF NOT EXISTS "project_brief" (
	"id" serial PRIMARY KEY NOT NULL,
	"public_slug" text,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"company" text NOT NULL,
	"role" text,
	"siren" text,
	"project_kinds" text[] DEFAULT '{}'::text[] NOT NULL,
	"objectives" text[] DEFAULT '{}'::text[] NOT NULL,
	"description" text,
	"current_situation" text,
	"audience" text,
	"must_haves" text[] DEFAULT '{}'::text[] NOT NULL,
	"integrations" text[] DEFAULT '{}'::text[] NOT NULL,
	"existing_assets" text[] DEFAULT '{}'::text[] NOT NULL,
	"open_scope" text,
	"timeline" text,
	"budget" text,
	"decision_stage" text,
	"consent" boolean DEFAULT false NOT NULL,
	"ip" text,
	"user_agent" text,
	"mail_sent" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "project_brief" ADD COLUMN IF NOT EXISTS "public_slug" text;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "project_brief_public_slug_unique" ON "project_brief" USING btree ("public_slug");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ai_call_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"service" text DEFAULT 'estimate' NOT NULL,
	"ip" text NOT NULL,
	"email_hash" text,
	"status" text NOT NULL,
	"block_reason" text,
	"tokens_used" integer DEFAULT 0 NOT NULL,
	"duration_ms" integer,
	"brief_id" integer,
	"user_agent" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ai_call_log_service_ip_created_at_idx" ON "ai_call_log" USING btree ("service", "ip", "created_at");
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ai_call_log_service_email_created_at_idx" ON "ai_call_log" USING btree ("service", "email_hash", "created_at");
