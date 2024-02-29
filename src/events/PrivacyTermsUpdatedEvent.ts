export interface PrivacyTermsUpdatedEvent {
 data: {
  id: string;
  identificacion: string;
  instituciones: Map<string, boolean>;
  version: number;
 };
}