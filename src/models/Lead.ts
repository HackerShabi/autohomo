import mongoose, { Schema, model, models } from 'mongoose';

export interface ILead {
    name: string;
    email: string;
    phone: string;
    website: string;
    traffic: string;
    message?: string;
    createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    traffic: { type: String, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const Lead = models.Lead || model<ILead>('Lead', LeadSchema);
