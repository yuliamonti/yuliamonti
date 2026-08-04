#!/bin/bash
# ══════════════════════════════════════════════════════════
# convertir-webp.sh — Generador Automático
# Ejecútalo en cualquier proyecto nuevo y convertirá todo.
# ══════════════════════════════════════════════════════════

# Verificar que tengas el cwebp.exe en esta nueva carpeta
if [ ! -f "./cwebp.exe" ]; then
    echo "❌ Error: No se encuentra cwebp.exe en la raíz de este proyecto."
    echo "👉 Copia el archivo cwebp.exe aquí junto al script."
    exit 1
fi

echo "🚀 Buscando imágenes nuevas para convertir..."
echo "--------------------------------------------------"

# Activamos la búsqueda en todas las subcarpetas
shopt -s globstar nullglob

# Escanea el proyecto entero buscando formatos comunes
for INPUT in **/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do

    # Ignora el propio convertidor o carpetas ocultas si las hay
    [[ "$INPUT" == .* ]] && continue

    OUTPUT="${INPUT%.*}.webp"

    # Si ya la convertiste antes, la salta para ir rápido
    if [ -f "$OUTPUT" ]; then
        continue
    fi

    # Ejecuta la conversión (Calidad 85 por defecto)
    ./cwebp.exe -q 85 "$INPUT" -o "$OUTPUT" -quiet

    # Muestra el resultado en la terminal
    ANTES=$(du -k "$INPUT" | cut -f1)
    DESPUES=$(du -k "$OUTPUT" | cut -f1)
    echo "✓ Convertido: $INPUT ➡️ ${OUTPUT##*/} (${ANTES}K → ${DESPUES}K)"
done

echo "--------------------------------------------------"
echo "🎉 ¡Conversión terminada para este proyecto!"
