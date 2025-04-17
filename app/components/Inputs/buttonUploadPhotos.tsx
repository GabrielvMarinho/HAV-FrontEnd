import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useEffect, useRef, useState } from "react";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import ArrowBack from "../IconsTSX/ArrowBack";
import Trashcan from "../IconsTSX/Trashcan";

/* export default function ButtonUploadPhotos<T>({
    name,
    register,
    error,
    initialImages
}: {
    name: keyof T;
    register?: UseFormRegister<T>;
    error?: FieldError;
    initialImages?: string[];
}) {

    const [preview, setPreview] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = function () {
        setCurrentIndex(currentIndex - 1)
    }
    const nextIndex = function () {
        setCurrentIndex(currentIndex + 1)
    }
    const deleteIndex = function () {
        console.log(preview.length)
        if (preview.length > 1) {
            setPreview((prev) => prev.filter((_, i) => i !== currentIndex));
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1)
            }
        } else {
            console.log("final")
            setPreview([])
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    if (e.target?.result) {
                        setPreview((prev) => [...prev, e.target!.result as string]); // Append to the state
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    return (
        <>
            {preview.length > 0 ?
                <>
                    <button className={"trashcanPhoto"} onClick={deleteIndex}>
                        <Trashcan width={23} height={23} color="var(--box-white)" /></button>
                    <button className={"photoArrow photoArrowLeft"} onClick={currentIndex > 0 ? prevIndex : () => { }}>
                        <ArrowBack width={23} height={23} color="var(--box-white)" /></button>
                    <button className={"mirrored photoArrow photoArrowRight"} onClick={currentIndex < preview.length - 1 ? nextIndex : () => { }}>
                        <ArrowBack width={23} height={23} color="var(--box-white)" /></button>
                    <img src={preview[currentIndex]} alt="Preview" className="previewImg" />
                    <div style={{ display: "flex" }}>
                        {preview.slice(Math.max(0, Math.min(currentIndex, preview.length - 4)), Math.min(currentIndex + 4, preview.length)).map((image, index) =>
                            <img onClick={() => { setCurrentIndex(index) }} className={index + Math.max(0, Math.min(currentIndex, preview.length - 4)) === currentIndex ? "markedImage subPreviewImg" : "subPreviewImg"} src={image}></img>
                        )
                        }
                    </div>
                </>
                : ""}

            <div className="buttonUploadPhotoIcon">
                <MoreSignal width={30} height={22} color="var(--box-white)" />
            </div>
            <input className="buttonUploadPhoto" multiple type="file"
                {...(register ? register(name) : {})}
                onChange={handleFileChange}
            />

            {error && <p className="errorText">{error.message}</p>}

        </>
    );
} */

/* export default function ButtonUploadPhotos<T>({
    name,
    register,
    error,
    initialImages = [],
    setValue
}: {
    name: keyof T;
    register?: UseFormRegister<T>;
    error?: FieldError;
    initialImages?: string[];
    setValue?: (name: keyof T, value: any) => void;
}) {
    const [preview, setPreview] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Atualiza o preview quando initialImages mudar
    useEffect(() => {
        if (initialImages && initialImages.length > 0) {
            setPreview(initialImages);
        }
    }, [initialImages]);

    // Atualiza o form toda vez que o preview mudar
    useEffect(() => {
        if (setValue) {
            setValue(name, preview);
        }
    }, [preview]);

    const prevIndex = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextIndex = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, preview.length - 1));
    };

    const deleteIndex = () => {
        setPreview((prev) => {
            const newPreview = prev.filter((_, i) => i !== currentIndex);
            const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            setCurrentIndex(newIndex);
            return newPreview;
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);

            fileArray.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        setPreview((prev) => [...prev, e.target!.result as string]);
                    }
                };
                reader.readAsDataURL(file);
            });

            // Limpa o input após seleção
            event.target.value = '';
        }
    };

    return (
        <>
            {preview.length > 0 && (
                <>
                    <button className="trashcanPhoto" type="button" onClick={deleteIndex}>
                        <Trashcan width={23} height={23} color="var(--box-white)" />
                    </button>
                    <button
                        className="photoArrow photoArrowLeft"
                        type="button"
                        onClick={prevIndex}
                        disabled={currentIndex === 0}
                    >
                        <ArrowBack width={23} height={23} color="var(--box-white)" />
                    </button>
                    <button
                        className="mirrored photoArrow photoArrowRight"
                        type="button"
                        onClick={nextIndex}
                        disabled={currentIndex >= preview.length - 1}
                    >
                        <ArrowBack width={23} height={23} color="var(--box-white)" />
                    </button>

                    <img src={preview[currentIndex]} alt="Preview" className="previewImg" />

                    <div style={{ display: 'flex' }}>
                        {preview
                            .slice(Math.max(0, Math.min(currentIndex, preview.length - 4)), Math.min(currentIndex + 4, preview.length))
                            .map((image, index) => {
                                const absoluteIndex = index + Math.max(0, Math.min(currentIndex, preview.length - 4));
                                return (
                                    <img
                                        key={absoluteIndex}
                                        onClick={() => setCurrentIndex(absoluteIndex)}
                                        className={
                                            absoluteIndex === currentIndex ? 'markedImage subPreviewImg' : 'subPreviewImg'
                                        }
                                        src={image}
                                        alt={`Preview ${absoluteIndex}`}
                                    />
                                );
                            })}
                    </div>
                </>
            )}

            <div className="buttonUploadPhotoIcon">
                <MoreSignal width={30} height={22} color="var(--box-white)" />
            </div>

            <input
                className="buttonUploadPhoto"
                type="file"
                multiple
                {...(register ? register(name) : {})}
                onChange={(e) => {
                    handleFileChange(e);
                    register && register(name).onChange(e); // Garante que o onChange do register seja chamado
                }}
            />

            {error && <p className="errorText">{error.message}</p>}
        </>
    );
} */

export default function ButtonUploadPhotos<T>({
    name,
    register,
    error,
    initialImages = [],
    setValue
}: {
    name: keyof T;
    register?: UseFormRegister<T>;
    error?: FieldError;
    initialImages?: string[];
    setValue?: (name: keyof T, value: any) => void;
}) {
    const [preview, setPreview] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        if (initialImages.length > 0) {
            setPreview(initialImages);
            setCurrentIndex(0); // Reseta índice ao mudar imagens iniciais
            console.log("verificando initialImageUrl", initialImages);
        }
    }, [initialImages]);

    useEffect(() => {
        if (preview.length > 0 && currentIndex >= 0 && currentIndex < preview.length) {
            console.log("Imagem atual:", preview[currentIndex]);
        }
    }, [preview, currentIndex]);

    useEffect(() => {
        if (setValue) {
            setValue(name, preview);
        }
    }, [preview, setValue, name]);

    const prevIndex = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextIndex = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, preview.length - 1));
    };

    const deleteIndex = () => {
        setPreview((prev) => {
            const newPreview = prev.filter((_, i) => i !== currentIndex);
            const newIndex = Math.max(0, currentIndex - (currentIndex === prev.length - 1 ? 1 : 0));
            setCurrentIndex(newIndex);
            return newPreview;
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            fileArray.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        setPreview((prev) => [...prev, e.target!.result as string]);
                    }
                };
                reader.readAsDataURL(file);
            });
            event.target.value = '';
        }
    };

    return (
        <>
            {preview.length > 0 && (
                <>
                    <button className="trashcanPhoto" type="button" onClick={deleteIndex}>
                        <Trashcan width={23} height={23} color="var(--box-white)" />
                    </button>
                    <button
                        className="photoArrow photoArrowLeft"
                        type="button"
                        onClick={prevIndex}
                        disabled={currentIndex === 0}
                    >
                        <ArrowBack width={23} height={23} color="var(--box-white)" />
                    </button>
                    <button
                        className="mirrored photoArrow photoArrowRight"
                        type="button"
                        onClick={nextIndex}
                        disabled={currentIndex >= preview.length - 1}
                    >
                        <ArrowBack width={23} height={23} color="var(--box-white)" />
                    </button>

                    <img src={preview[currentIndex]} alt="Preview" className="previewImg" />

                    <div style={{ display: 'flex' }}>
                        {preview
                            .slice(Math.max(0, currentIndex - 2), currentIndex + 3)
                            .map((image, index) => {
                                const absoluteIndex = index + Math.max(0, currentIndex - 2);
                                return (
                                    <img
                                        key={absoluteIndex}
                                        onClick={() => setCurrentIndex(absoluteIndex)}
                                        className={
                                            absoluteIndex === currentIndex
                                                ? 'markedImage subPreviewImg'
                                                : 'subPreviewImg'
                                        }
                                        src={image}
                                        alt={`Preview ${absoluteIndex}`}
                                    />
                                );
                            })}
                    </div>
                </>
            )}

            <label htmlFor={`upload-${name}`} className="buttonUploadPhotoIcon" style={{ cursor: 'pointer' }}>
                <MoreSignal width={30} height={22} color="var(--box-white)" />
            </label>

            <input
                id={`upload-${name}`}
                className="buttonUploadPhoto"
                type="file"
                multiple
                accept="image/*"
                {...(register ? register(name) : {})}
                onChange={(e) => {
                    handleFileChange(e);
                }}
                style={{ display: 'none' }}
            />

            {error && <p className="errorText">{error.message}</p>}
        </>
    );
}
