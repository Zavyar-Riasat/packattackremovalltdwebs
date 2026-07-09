import { Metadata } from 'next';
import MaintenanceContent from './MaintenanceContent';

export const metadata: Metadata = {
  title: 'Ongoing Maintenance Plans | Your Company',
  description: 'Professional ongoing maintenance plans to keep your property in pristine condition year-round. Customized solutions for residential and commercial properties.',
};

export default function MaintenancePage() {
  return <MaintenanceContent />;
}