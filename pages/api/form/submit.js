import connectToDatabase from "@/lib/mongodb";
import { FormModel } from "@/models/FormModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Method '${req.method}' not allowed` });
  }

  try {
    await connectToDatabase();

    const formData = req.body;

    // Save only field data, completely ignore file fields
    const form = new FormModel({
      ...formData,
      photo: undefined,
      signOne: undefined,
      signTwo: undefined,
      addressProof: undefined,
      panCardFile: undefined,
      education: (formData.education || []).map((edu) => ({
        ...edu,
        uploadOne: undefined,
      })),
    });

    await form.save();

    res
      .status(201)
      .json({ message: "Form submitted successfully (files ignored)" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
