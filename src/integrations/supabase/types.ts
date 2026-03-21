export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      backlink_prospects: {
        Row: {
          backlink_url: string | null
          contact_email: string | null
          contact_name: string | null
          created_at: string
          domain_authority: number | null
          id: string
          notes: string | null
          outreach_type: string
          pitch_sent_date: string | null
          published_date: string | null
          response_date: string | null
          status: string
          updated_at: string
          user_id: string
          website_name: string
          website_url: string
        }
        Insert: {
          backlink_url?: string | null
          contact_email?: string | null
          contact_name?: string | null
          created_at?: string
          domain_authority?: number | null
          id?: string
          notes?: string | null
          outreach_type: string
          pitch_sent_date?: string | null
          published_date?: string | null
          response_date?: string | null
          status?: string
          updated_at?: string
          user_id: string
          website_name: string
          website_url: string
        }
        Update: {
          backlink_url?: string | null
          contact_email?: string | null
          contact_name?: string | null
          created_at?: string
          domain_authority?: number | null
          id?: string
          notes?: string | null
          outreach_type?: string
          pitch_sent_date?: string | null
          published_date?: string | null
          response_date?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          website_name?: string
          website_url?: string
        }
        Relationships: []
      }
      content_updates: {
        Row: {
          article_path: string
          article_slug: string
          article_title: string
          created_at: string
          current_word_count: number | null
          has_featured_snippet: boolean | null
          has_feedback_component: boolean | null
          has_internal_links: boolean | null
          has_last_updated: boolean | null
          id: string
          last_updated_date: string | null
          notes: string | null
          priority: string
          target_word_count: number | null
          update_status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          article_path: string
          article_slug: string
          article_title: string
          created_at?: string
          current_word_count?: number | null
          has_featured_snippet?: boolean | null
          has_feedback_component?: boolean | null
          has_internal_links?: boolean | null
          has_last_updated?: boolean | null
          id?: string
          last_updated_date?: string | null
          notes?: string | null
          priority?: string
          target_word_count?: number | null
          update_status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          article_path?: string
          article_slug?: string
          article_title?: string
          created_at?: string
          current_word_count?: number | null
          has_featured_snippet?: boolean | null
          has_feedback_component?: boolean | null
          has_internal_links?: boolean | null
          has_last_updated?: boolean | null
          id?: string
          last_updated_date?: string | null
          notes?: string | null
          priority?: string
          target_word_count?: number | null
          update_status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sitemap_validations: {
        Row: {
          created_at: string
          errors: number
          id: string
          results: Json
          successful: number
          timestamp: string
          total_checked: number
          triggered_by: string | null
        }
        Insert: {
          created_at?: string
          errors: number
          id?: string
          results: Json
          successful: number
          timestamp?: string
          total_checked: number
          triggered_by?: string | null
        }
        Update: {
          created_at?: string
          errors?: number
          id?: string
          results?: Json
          successful?: number
          timestamp?: string
          total_checked?: number
          triggered_by?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
