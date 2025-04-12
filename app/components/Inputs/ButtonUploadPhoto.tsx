import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useEffect, useRef, useState } from "react";
import { FieldError, UseFormRegister, FieldValues, useFormContext } from "react-hook-form";
import Trashcan from "../IconsTSX/Trashcan";

/* export default function ButtonUploadPhoto<T>({
  name,
  register,
  error
}: {
  name: keyof T;
  register?: UseFormRegister<T>;
  error?: FieldError;
}) {

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => setPreview(e.target?.result as string);

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {preview && <img src={preview} alt="Preview" className="previewImg" />}
      <div className="buttonUploadPhotoIcon">
        <MoreSignal width={30} height={22} color="var(--box-white)" />
      </div>
      <input className="buttonUploadPhoto" type="file"
        {...(register ? register(name) : {})}
        onChange={handleFileChange}
      />
      {error && <p className="errorText">{error.message}</p>}
    </>
  );
} 
export default function ButtonUploadPhoto<T>({
  name,
  register,
  error
}: {
  name: keyof T;
  register?: UseFormRegister<T>;
  error?: FieldError;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setPreview(null);
    // Limpa o valor do input para permitir selecionar a mesma imagem novamente
    const input = document.querySelector('.buttonUploadPhoto') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  return (
    <>
      {preview && (
        <>
          <button className={"trashcanPhoto"} onClick={deleteImage}>
            <Trashcan width={23} height={23} color="var(--box-white)" />
          </button>
          <img src={preview} alt="Preview" className="previewImg" />
        </>
      )}
      <div className="buttonUploadPhotoIcon">
        <MoreSignal width={30} height={22} color="var(--box-white)" />
      </div>
      <input
        className="buttonUploadPhoto"
        type="file"
        {...(register ? register(name) : {})}
        onChange={handleFileChange}
      />
      {error && <p className="errorText">{error.message}</p>}
    </>
  );
} 
export default function ButtonUploadPhoto<T>({
  name,
  register,
  error,
  initialImageUrl // Adicione esta prop
}: {
  name: keyof T;
  register?: UseFormRegister<T>;
  error?: FieldError;
  initialImageUrl?: string; // URL da imagem existente no S3
}) {
  const [preview, setPreview] = useState<string | null>(initialImageUrl || null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setPreview(null);
    // Limpa o valor do input para permitir selecionar a mesma imagem novamente
    const input = document.querySelector('.buttonUploadPhoto') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  return (
    <>
      {preview && (
        <>
          <button className={"trashcanPhoto"} onClick={deleteImage}>
            <Trashcan width={23} height={23} color="var(--box-white)" />
          </button>
          <img src={preview} alt="Preview" className="previewImg" />
        </>
      )}
      <div className="buttonUploadPhotoIcon">
        <MoreSignal width={30} height={22} color="var(--box-white)" />
      </div>
      <input
        className="buttonUploadPhoto"
        type="file"
        {...(register ? register(name) : {})}
        onChange={handleFileChange}
      />
      {error && <p className="errorText">{error.message}</p>}
    </>
  );
} */
export default function ButtonUploadPhoto<T>({
  name,
  register,
  error,
  initialImageUrl,
  setValue,
  imageId
}: {
  name: keyof T;
  register?: UseFormRegister<T>;
  error?: FieldError;
  initialImageUrl?: string;
  setValue?: (name: string, value: any) => void;
  imageId?: number;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  // Atualiza o preview quando initialImageUrl muda
  useEffect(() => {
    if (initialImageUrl) {
      setPreview(initialImageUrl);
    }
  }, [initialImageUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setPreview(null);
    setValue && setValue(name as string, null);

    if (imageId) {
      setValue("deletedImageId", imageId); // Prepara pro backend
    }

    console.log(imageId);

    const input = document.querySelector('.buttonUploadPhoto') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  return (
    <>
      {preview && (
        <>
          <button type="button" className={"trashcanPhoto"} onClick={deleteImage}>
            <Trashcan width={23} height={23} color="var(--box-white)" />
          </button>
          <img src={preview} alt="Preview" className="previewImg" />
        </>
      )}
      <div className="buttonUploadPhotoIcon">
        <MoreSignal width={30} height={22} color="var(--box-white)" />
      </div>
      <input
        className="buttonUploadPhoto"
        type="file"
        {...(register ? register(name) : {})}
        onChange={(e) => {
          handleFileChange(e);
          // Chama o onChange do register se existir
          register && register(name).onChange(e);
        }}
      />
      {error && <p className="errorText">{error.message}</p>}
    </>
  );
}