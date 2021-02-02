<?php 

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;

class FormRequest extends BaseFormRequest
{
    public function response(array $errors)
    {
        if($this->expectsJson()){
            return JsonResponse(['errors' => $errors], 422);
        }

        return $this->redirector->to($this->getRedirectUrl())
        ->withInput($this->expect($this->dontFlash))
        ->withErrors($errors, $this->errorBag);
    }
}