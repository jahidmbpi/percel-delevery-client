import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📦 Contact Us</h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Have questions about your parcel delivery? Get in touch with us through
        the form below or use our contact details.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-primary" /> Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">+880 1234 567 890</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">support@parceldelivery.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" /> Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Send us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 ">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
