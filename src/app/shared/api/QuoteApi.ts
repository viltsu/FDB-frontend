/**
 * FDB-backend
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class QuoteApi {
    protected basePath = 'http://localhost:3000/api';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     */
    public quoteCount (where?: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse200> {
        const path = this.basePath + '/Quotes/count';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (where !== undefined) {
            queryParameters.set('where', String(where));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param data Model instance data
     */
    public quoteCreate (data?: models.Quote, extraHttpRequestParams?: any ) : Observable<models.Quote> {
        const path = this.basePath + '/Quotes';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a change stream.
     *
     * @param options
     */
    public quoteCreateChangeStreamGetQuotesChangeStream (options?: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Quotes/change-stream';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (options !== undefined) {
            queryParameters.set('options', String(options));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a change stream.
     *
     * @param options
     */
    public quoteCreateChangeStreamPostQuotesChangeStream (options?: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Quotes/change-stream';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['options'] = options;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete a model instance by id from the data source.
     *
     * @param id Model id
     */
    public quoteDeleteById (id: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Quotes/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling quoteDeleteById.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    public quoteExistsGetQuotesidExists (id: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2001> {
        const path = this.basePath + '/Quotes/{id}/exists'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling quoteExistsGetQuotesidExists.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check whether a model instance exists in the data source.
     *
     * @param id Model id
     */
    public quoteExistsHeadQuotesid (id: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2001> {
        const path = this.basePath + '/Quotes/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling quoteExistsHeadQuotesid.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'HEAD',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit
     */
    public quoteFind (filter?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Quote>> {
        const path = this.basePath + '/Quotes';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find a model instance by id from the data source.
     *
     * @param id Model id
     * @param filter Filter defining fields and include
     */
    public quoteFindById (id: string, filter?: string, extraHttpRequestParams?: any ) : Observable<models.Quote> {
        const path = this.basePath + '/Quotes/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling quoteFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param filter Filter defining fields, where, include, order, offset, and limit
     */
    public quoteFindOne (filter?: string, extraHttpRequestParams?: any ) : Observable<models.Quote> {
        const path = this.basePath + '/Quotes/findOne';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update attributes for a model instance and persist it into the data source.
     *
     * @param id PersistedModel id
     * @param data An object of model property name/value pairs
     */
    public quotePrototypeUpdateAttributes (id: string, data?: models.Quote, extraHttpRequestParams?: any ) : Observable<models.Quote> {
        const path = this.basePath + '/Quotes/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling quotePrototypeUpdateAttributes.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Return random quote
     *
     */
    public quoteRandom (extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Quotes/random';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update instances of the model matched by where from the data source.
     *
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    public quoteUpdateAll (where?: string, data?: models.Quote, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Quotes/update';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (where !== undefined) {
            queryParameters.set('where', String(where));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an existing model instance or insert a new one into the data source.
     *
     * @param data Model instance data
     */
    public quoteUpsert (data?: models.Quote, extraHttpRequestParams?: any ) : Observable<models.Quote> {
        const path = this.basePath + '/Quotes';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
