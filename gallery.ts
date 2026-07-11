export type GalleryItem = {
  id: string;
  file: string;
  title: string;
  date: string;
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: number;
  focalLength: string;
  width: number;
  height: number;
  visible: boolean;
};

export const gallery: GalleryItem[] = [
  { id: "DSC_0275", file: "DSC_0275.JPG", title: "Morning Tower", date: "2026-06-28T06:13:58", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0279", file: "DSC_0279.JPG", title: "First Stop", date: "2026-06-28T07:52:41", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/320", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0281", file: "DSC_0281.JPG", title: "Main Street", date: "2026-06-28T07:54:01", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "17mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0284", file: "DSC_0284.JPG", title: "Winter Road", date: "2026-06-28T07:55:15", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/5.6", shutter: "1/250", iso: 100, focalLength: "30mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0285", file: "DSC_0285.JPG", title: "Roadside Pause", date: "2026-06-28T07:55:28", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "25mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0287", file: "DSC_0287.JPG", title: "Misty Bay", date: "2026-06-28T09:21:35", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/9", shutter: "1/640", iso: 100, focalLength: "28mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0288", file: "DSC_0288.JPG", title: "Low Clouds", date: "2026-06-28T09:24:16", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0300", file: "DSC_0300.JPG", title: "Open Coast", date: "2026-06-28T09:36:59", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "17mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0308", file: "DSC_0308.JPG", title: "Tidal Rocks", date: "2026-06-28T09:39:49", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "17mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0320", file: "DSC_0320.JPG", title: "Shore Birds", date: "2026-06-28T09:56:24", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 125, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0330", file: "DSC_0330.JPG", title: "Breaking Waves", date: "2026-06-28T10:04:46", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "32.5mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0331", file: "DSC_0331.JPG", title: "Stone Headland", date: "2026-06-28T10:04:53", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0334", file: "DSC_0334.JPG", title: "Open Arms", date: "2026-06-28T10:05:19", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0336", file: "DSC_0336.JPG", title: "Still Figure", date: "2026-06-28T10:06:30", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/8", shutter: "1/500", iso: 100, focalLength: "16mm", width: 1067, height: 1600, visible: true },
  { id: "DSC_0337", file: "DSC_0337.JPG", title: "Cloud Field", date: "2026-06-28T10:06:32", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/8", shutter: "1/500", iso: 100, focalLength: "16mm", width: 1067, height: 1600, visible: true },
  { id: "DSC_0341", file: "DSC_0341.JPG", title: "Soft Horizon", date: "2026-06-28T10:19:04", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "17.5mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0342", file: "DSC_0342.JPG", title: "Open Water", date: "2026-06-28T10:19:17", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0345", file: "DSC_0345.JPG", title: "White Shore", date: "2026-06-28T10:21:14", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/5.6", shutter: "1/250", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0346", file: "DSC_0346.JPG", title: "Along the Coast", date: "2026-06-28T10:21:21", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "32.5mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0347", file: "DSC_0347.JPG", title: "Cliff Grass", date: "2026-06-28T10:21:41", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/5.6", shutter: "1/250", iso: 110, focalLength: "24mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0348", file: "DSC_0348.JPG", title: "Coastal Path", date: "2026-06-28T10:21:50", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/5.3", shutter: "1/250", iso: 280, focalLength: "35mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0351", file: "DSC_0351.JPG", title: "Toward the Cape", date: "2026-06-28T10:22:59", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "20mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0353", file: "DSC_0353.JPG", title: "Tidal Rocks", date: "2026-06-28T10:23:16", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0354", file: "DSC_0354.JPG", title: "Quiet Coast", date: "2026-06-28T10:29:50", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "17mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0355", file: "DSC_0355.JPG", title: "Headland", date: "2026-06-28T10:29:56", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "18mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0357", file: "DSC_0357.JPG", title: "Between Land", date: "2026-06-28T10:30:06", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0358", file: "DSC_0358.JPG", title: "Open Tide", date: "2026-06-28T10:30:19", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/8", shutter: "1/500", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0359", file: "DSC_0359.JPG", title: "Before the Light", date: "2026-06-28T10:30:36", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0360", file: "DSC_0360.JPG", title: "Blue Opening", date: "2026-06-28T10:30:49", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/11", shutter: "1/1000", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0361", file: "DSC_0361.JPG", title: "After the Clouds", date: "2026-06-28T10:31:01", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/9", shutter: "1/640", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0362", file: "DSC_0362.JPG", title: "Toward the Shore", date: "2026-06-28T10:37:26", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "16mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0363", file: "DSC_0363.JPG", title: "Still Hill", date: "2026-06-28T10:37:37", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0370", file: "DSC_0370.JPG", title: "White Coast", date: "2026-06-28T10:40:57", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "22mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0371", file: "DSC_0371.JPG", title: "Open Water", date: "2026-06-28T10:41:03", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/7.1", shutter: "1/400", iso: 100, focalLength: "29mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0372", file: "DSC_0372.JPG", title: "High Wind", date: "2026-06-28T10:41:08", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/9", shutter: "1/640", iso: 100, focalLength: "24.5mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0373", file: "DSC_0373.JPG", title: "Living Shore", date: "2026-06-28T10:41:40", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0374", file: "DSC_0374.JPG", title: "Shared Ground", date: "2026-06-28T10:41:50", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/320", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0375", file: "DSC_0375.JPG", title: "At Rest", date: "2026-06-28T11:04:42", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0376", file: "DSC_0376.JPG", title: "No Hurry", date: "2026-06-28T11:04:53", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0377", file: "DSC_0377.JPG", title: "Shared Shore", date: "2026-06-28T11:05:09", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 140, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0378", file: "DSC_0378.JPG", title: "Green Stone", date: "2026-06-28T11:05:36", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 100, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0379", file: "DSC_0379.JPG", title: "Among the Rocks", date: "2026-06-28T11:05:49", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 125, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0383", file: "DSC_0383.JPG", title: "Stone Fold", date: "2026-06-28T11:06:50", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 180, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0384", file: "DSC_0384.JPG", title: "Shelter", date: "2026-06-28T11:07:04", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 110, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0387", file: "DSC_0387.JPG", title: "Broken Coast", date: "2026-06-28T11:08:03", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 110, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0388", file: "DSC_0388.JPG", title: "Quiet Colony", date: "2026-06-28T11:09:25", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 180, focalLength: "50mm", width: 1600, height: 1067, visible: true },
  { id: "DSC_0392", file: "DSC_0392.JPG", title: "Sleeping Light", date: "2026-06-28T11:10:25", camera: "NIKON Z fc", lens: "NIKKOR Z DX 16-50mm f/3.5-6.3 VR", aperture: "f/6.3", shutter: "1/250", iso: 320, focalLength: "50mm", width: 1600, height: 1067, visible: true },
];
