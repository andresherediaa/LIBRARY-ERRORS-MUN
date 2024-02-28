export interface PrivacyTermsCreatedEvent {
 data: {
  id: string;
  identificacion: string;
  instituciones: Map<string, boolean>;
  version: number;
 };
}