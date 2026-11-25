export interface Enquiry {
  name: string; phone: string; category: string; location: string;
  email?: string; company?: string; stone?: string; quantity?: string; dimensions?: string;
  finish?: string; application?: string; message?: string; type?: string; file?: string; source: string;
}

/**
 * Submit an enquiry. This is a front-end stub: connect it to the backend / admin panel
 * (POST /api/enquiries) described in the PRD. Until then it resolves after a short delay.
 */
export async function submitEnquiry(e: Enquiry): Promise<{ id: string }> {
  await new Promise((r) => setTimeout(r, 600));
  const id = `JMG-${Date.now().toString(36).toUpperCase()}`;
  if (import.meta.env.DEV) console.info('Enquiry (stub, not stored)', id, e);
  return { id };
}
